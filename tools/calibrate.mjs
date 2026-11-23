// Measures how similar real vs junk answers are to each prompt's example bank,
// using the same gte-small model Supabase Edge Functions run.
import { pipeline } from "@huggingface/transformers";
import fs from "node:fs";

const bank = JSON.parse(fs.readFileSync(new URL("../site/prompts.json", import.meta.url))).prompts;
const embed = await pipeline("feature-extraction", "Supabase/gte-small", { dtype: "fp32" });
const vec = async (t) => Array.from((await embed(t, { pooling: "mean", normalize: true })).data);
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);

// Answers NOT in the bank: should pass (good) or fail (bad).
const tests = {
  m1: { good: ["chamomile tea", "play with my cat", "go on a short run", "breathing exercises", "listen to a podcast", "look at the sky", "hot shower", "eat chocolate", "pace around", "tidy my desk"],
        bad: ["carburetor", "tax law", "volcano", "asdf jkl", "purple", "my exam is tomorrow", "the eiffel tower", "spreadsheet", "algebra", "mitochondria"] },
  m3: { good: ["third floor of thode", "a quiet cafe downtown", "my grandma's kitchen", "the train", "late evenings", "the student union", "a library carrel", "my sister's apartment"],
        bad: ["pizza", "chocolate", "blue", "running", "my dog", "taylor swift", "happy", "flashcards"] },
  m4: { good: ["pocky", "rice crackers", "green tea", "apple slices with peanut butter", "doritos", "a latte", "dates", "cheese strings"],
        bad: ["library", "flashcards", "my friends", "running", "sadness", "the moon", "keyboard", "relieved"] },
  m5: { good: ["writing summaries", "studying in 25 minute blocks", "practice tests", "teaching my roommate", "using a whiteboard", "rewatching lectures", "making my own quiz"],
        bad: ["pizza", "the beach", "my cat", "red bull", "sunshine", "skating", "purple", "lavender"] },
  m6: { good: ["my little brother", "a good coffee", "cute dogs on instagram", "my best friend", "sunny days", "my nephew", "a hot meal"],
        bad: ["calculus", "the dmv", "tax returns", "asdfgh", "a spreadsheet", "printer ink", "parking tickets"] },
  m7: { good: ["thrilled", "rested", "unbothered", "whole", "elated", "chilled", "safe"],
        bad: ["pizza", "library", "chair", "banana", "car", "keyboard", "flashcards"] },
};

for (const p of bank) {
  if (!tests[p.id]) continue;
  const refs = [];
  for (const t of [...p.f, ...p.j, ...p.p]) refs.push(await vec(t));
  const promptVec = await vec(p.q);
  const score = async (a) => { const v = await vec(a); return { ref: Math.max(...refs.map((r) => dot(r, v))), q: dot(promptVec, v) }; };
  console.log(`\n== ${p.id}: ${p.q}`);
  for (const kind of ["good", "bad"]) {
    for (const a of tests[p.id][kind]) {
      const s = await score(a);
      console.log(`${kind.padEnd(4)} ref=${s.ref.toFixed(3)} q=${s.q.toFixed(3)}  ${a}`);
    }
  }
}
