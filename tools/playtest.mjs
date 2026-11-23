// Plays a full dive of index.html in a simulated browser and prints what a player would see.
import { JSDOM } from "jsdom";
import fs from "node:fs";
const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
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
const until = async (f, ms = 8000) => { const t = Date.now(); while (!f()) { if (Date.now() - t > ms) throw new Error("timed out waiting"); await wait(50); } };
await wait(100);
console.log("home:", $("homeMeta").textContent, "| scene:", d.body.dataset.scene);
$("goBtn").click();
const tries = [["asdfgh", "go for a walk"], ["meditaion", "meditaion"], ["blurting"], ["shit", "the swc"], ["my cat"], ["so happy", "kill myself", "blissful"], [null]];
for (let i = 0; i < 7; i++) {
  await until(() => !$("form").hidden && !$("inp").disabled);
  const q = $("prompt").textContent;
  const P = w.eval("run.items[run.i].p"), pick = t => (P.entries.find(e => e.tier === t && e.text.length > 7 && !e.text.includes(" ")) || P.entries.find(e => e.tier === t)).text;
  const typo = x => x.slice(0, 2) + x[3] + x[2] + x.slice(4);
  const plan = [[pick(0)], [typo(pick(3)), typo(pick(3))], [pick(5)], ["shit", "the swc"], [pick(2)], ["kill myself", pick(4)], [null]][i];
  for (const a of plan) {
    if (a === null) { $("skipBtn").click(); break; }
    $("inp").value = a; $("inp").dispatchEvent(new w.Event("input"));
    $("form").dispatchEvent(new w.Event("submit", { cancelable: true }));
    await wait(400);
    if ($("result").classList.contains("up")) break;
    console.log(`  [${a}] -> ${$("note").textContent.slice(0, 100)}`);
  }
  if (!$("result").classList.contains("up")) { $("skipBtn").click(); await wait(50); }
  console.log(`${i + 1}. ${q}\n   ${$("rTop").textContent} | ${$("rNums").textContent} | ${$("rSaid").textContent} | ${$("rFact").textContent}`);
  console.log("   depth:", $("depth").textContent, "| sea:", $("sea").style.transform);
  $("nextBtn").click();
}
await until(() => !$("end").hidden);
console.log("\nEND:", $("eScore").textContent, $("eDepth").textContent, "|", $("eRating").textContent, "|", $("eCurveCap").textContent, "|", $("eNext").textContent);
console.log("rows:", [...d.querySelectorAll("#eRows .r")].map(r => r.textContent).join(" // ").slice(0, 400));
console.log("quotes:", [...d.querySelectorAll("#quotes textarea")].map(t => t.value).slice(0, 2));
$("allBtn").click(); console.log("all answers:", $("sheetBody").textContent.slice(0, 160)); $("sheetX").click();
$("menuBtn").click(); d.querySelector('[data-go="past"]').click(); console.log("past:", $("sheetBody").textContent.slice(0, 120)); $("sheetX").click();
$("menuBtn").click(); d.querySelector('[data-go="settings"]').click(); $("staffOpen").click(); console.log("staff missed:", $("missed").textContent.slice(0, 160));
console.log("errors:", errors.length ? errors : "none");
process.exit(0);
