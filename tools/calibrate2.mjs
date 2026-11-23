// Contrastive check: accept only if the answer is closer to this prompt's bank
// than to (a) banks of prompts expecting a different kind of answer and (b) a junk bank.
import { pipeline } from "@huggingface/transformers";
import fs from "node:fs";

const data = JSON.parse(fs.readFileSync(new URL("../site/prompts.json", import.meta.url)));
const bank = data.prompts;
const JUNK = JSON.parse(fs.readFileSync(new URL("../site/junk.json", import.meta.url)));
const embed = await pipeline("feature-extraction", "Supabase/gte-small", { dtype: "fp32" });
const vec = async (t) => Array.from((await embed(t, { pooling: "mean", normalize: true })).data);
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);

const refs = {};
for (const p of bank) { refs[p.id] = []; for (const t of [...p.f, ...p.j, ...p.p]) refs[p.id].push({ t, v: await vec(t) }); }
const junk = []; for (const t of JUNK) junk.push({ t, v: await vec(t) });

const FLOOR = +(process.argv[2] ?? 0.8), TOL = +(process.argv[3] ?? 0.02);
function judge(p, v) {
  let own = { s: -1 }; for (const r of refs[p.id]) { const s = dot(r.v, v); if (s > own.s) own = { s, t: r.t }; }
  let other = { s: -1 };
  for (const q of bank) { if (q.id === p.id || (p.near || []).includes(q.id) || q.kind === p.kind) continue;
    for (const r of refs[q.id]) { const s = dot(r.v, v); if (s > other.s) other = { s, t: `${q.id}:${r.t}` }; } }
  for (const r of junk) { const s = dot(r.v, v); if (s > other.s) other = { s, t: `junk:${r.t}` }; }
  const ok = own.s >= FLOOR && own.s + TOL >= other.s;
  return { ok, own, other };
}

const tests = JSON.parse(fs.readFileSync(new URL("./tests.json", import.meta.url)));
let tp = 0, fn = 0, tn = 0, fp = 0; const misses = [];
for (const p of bank) {
  const t = tests[p.id]; if (!t) continue;
  for (const kind of ["good", "bad"]) for (const a of t[kind]) {
    const r = judge(p, await vec(a));
    if (kind === "good") r.ok ? tp++ : (fn++, misses.push(`REJECTED good ${p.id} "${a}" own=${r.own.s.toFixed(3)}(${r.own.t}) other=${r.other.s.toFixed(3)}(${r.other.t})`));
    else r.ok ? (fp++, misses.push(`ACCEPTED bad  ${p.id} "${a}" own=${r.own.s.toFixed(3)}(${r.own.t}) other=${r.other.s.toFixed(3)}(${r.other.t})`)) : tn++;
  }
}
console.log(misses.join("\n"));
console.log(`\nFLOOR=${FLOOR} TOL=${TOL}  good accepted ${tp}/${tp + fn}   bad rejected ${tn}/${tn + fp}`);
