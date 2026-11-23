// Checks the answer lists: counts, duplicates across tiers, and how test answers match.
// Run: node check.mjs            (summary + conflicts)
//      node check.mjs try m1 "going for a walk around campus"
import "../site/match.js";
import "../site/answers.js";
import "../site/answers2.js";
import fs from "node:fs";
const M = globalThis.SnowMatch, P = globalThis.SNOW_PROMPTS;
const idx = {};
for (const p of P) idx[p.id] = M.buildIndex(M.parsePrompt(p));

const args = process.argv.slice(2);
if (args[0] === "try") {
  const p = args[1];
  for (const a of args.slice(2)) { const r = M.find(idx[p], a); console.log(JSON.stringify(a), "->", r ? `${r.entry.text} [tier ${r.entry.tier}, ${r.how}]` : "NOT ON LIST", " tokens:", M.tokens(a).join(" ")); }
  process.exit(0);
}

let total = 0;
for (const p of P) {
  const es = M.parsePrompt(p), per = [0, 0, 0, 0, 0, 0]; let al = 0;
  es.forEach(e => { per[e.tier]++; al += 1 + e.aliases.length; });
  total += al;
  // same key used by different entries
  const seen = new Map(), clash = [];
  for (const e of es) for (const a of [e.text, ...e.aliases]) {
    const k = M.tokens(a).join(" "); if (!k) { clash.push(`EMPTY "${a}"`); continue; }
    const o = seen.get(k); if (o && o !== e && o.tier !== e.tier) clash.push(`"${a}" t${e.tier} vs "${o.text}" t${o.tier}`); else if (!o) seen.set(k, e);
  }
  console.log(`${p.id.padEnd(4)} entries ${String(es.length).padStart(4)}  phrasings ${String(al).padStart(5)}  per tier ${per.join("/")}${clash.length ? `  CLASHES ${clash.length}` : ""}`);
  if (args[0] === "v") clash.slice(0, 40).forEach(c => console.log("     ", c));
}
console.log("total phrasings", total);

const tests = JSON.parse(fs.readFileSync(new URL("./tests.json", import.meta.url)));
let good = 0, gt = 0, bad = 0, bt = 0; const miss = [];
for (const [pid, t] of Object.entries(tests)) {
  if (!idx[pid]) continue;
  for (const a of t.good) { gt++; const r = M.find(idx[pid], a); if (r) good++; else miss.push(`MISSED good ${pid} "${a}"`); }
  for (const a of t.bad) { bt++; const r = M.find(idx[pid], a); if (!r) bad++; else miss.push(`ACCEPTED bad ${pid} "${a}" -> ${r.entry.text} (${r.how})`); }
}
console.log(miss.join("\n"));
console.log(`good accepted ${good}/${gt}, bad rejected ${bad}/${bt}`);
