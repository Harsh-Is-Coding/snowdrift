import fs from "node:fs";
const f = new URL("../site/prompts.json", import.meta.url);
const d = JSON.parse(fs.readFileSync(f));
const near = { m1:"m2,m4,m6,e1,e3,e4,e5,e7,e9,e10,e13", m2:"m1,m4,m6,e3,e5,e7,e9,e10,e13", m3:"e12", m4:"e3,e10,m6,e4,m1", m5:"e6,e2,e5", m6:"m1,m2,m4,m7,e1,e3,e4,e7,e8,e9,e10,e11,e12,e13", m7:"", e1:"e11,m6,m1", e2:"m5,e5,e6,e13,m1,m2", e3:"m1,m2,m4,m6,e7,e9,e11,e13", e4:"m4,e7,m6", e5:"m1,m2,m5,e2,e6,e13", e6:"m5,e2,e5", e7:"m1,m2,m4,e3,e9,m6", e8:"e9,m2", e9:"m1,m2,e7,e3,m6,e1", e10:"m1,m2,m4,e5", e11:"e1,m6,e3", e12:"m3,m6,m4,e4", e13:"m1,m2,e3,e5,m6,e2" };
for (const p of d.prompts) p.near = near[p.id] ? near[p.id].split(",") : [];
fs.writeFileSync(f, JSON.stringify(d, null, 1));
console.log("near added to", d.prompts.length, "prompts");
