// Plays a full run of Snowdrift.html in a simulated browser and prints what a player would see.
import { JSDOM } from "jsdom";
import fs from "node:fs";
const html = fs.readFileSync(new URL("../Snowdrift.html", import.meta.url), "utf8");
const errors = [];
const dom = new JSDOM(html, { runScripts: "dangerously", pretendToBeVisual: true, url: "http://localhost/",
  beforeParse(w) {
    w.matchMedia = () => ({ matches: false, addEventListener() {} });
    w.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, { get: (t, k) => k in t ? t[k] : () => {}, set: (t, k, v) => (t[k] = v, true) });
    w.scrollTo = () => {}; w.Element.prototype.scrollIntoView = () => {};
    w.addEventListener("error", e => errors.push(e.message));
  } });
const w = dom.window, d = w.document, $ = id => d.getElementById(id);
const wait = ms => new Promise(r => setTimeout(r, ms));
await wait(100);
$("startBtn").click();
const answers = [
  ["asdfgh", "go for a walk to cootes"],
  ["dkjfh", "pet the therapy dogs"],
  ["timmies double double"],
  ["blurting"],
  ["shit", "the swc"],
  ["my cat"],
  ["so happy", "kill myself", "blissful"],
];
for (let i = 0; i < 7; i++) {
  const q = $("promptText").textContent;
  for (const a of answers[i]) {
    $("answerInput").value = a;
    $("answerForm").dispatchEvent(new w.Event("submit", { cancelable: true }));
    if (!$("reveal").hidden) break;
    console.log(`  [${a}] -> ${$("err").textContent.slice(0, 110)}`);
  }
  console.log(`${i + 1}. ${q}\n   ${$("rSaid").textContent} => ${$("rName").textContent} ${$("rPts").textContent} | ${$("rDetail").textContent}`);
  $("nextBtn").click();
}
console.log("\nEND:", $("endCm").textContent, "|", $("endZone").textContent);
console.log("share:", $("shareText").textContent.replace(/\n/g, " / "));
console.log("quotes:", [...d.querySelectorAll(".quote textarea")].map(t => t.value).slice(0, 3));
d.querySelector(".res details").open = true; d.querySelector(".res details").dispatchEvent(new w.Event("toggle"));
console.log("list view:", d.querySelector(".lst")?.textContent.slice(0, 200));
console.log("wall:", $("wall").textContent.slice(0, 200));
$("staffLink").click();
console.log("missed table:", $("missed").textContent.slice(0, 200));
console.log("errors:", errors.length ? errors : "none");
