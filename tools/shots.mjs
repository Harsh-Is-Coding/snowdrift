// Screenshots of every screen in real Chrome (phone + laptop sizes). Usage: node shots.mjs <outdir>
import puppeteer from "puppeteer-core";
import path from "node:path";
import { pathToFileURL } from "node:url";
const out = process.argv[2] || ".";
const url = pathToFileURL(path.resolve("../index.html")).href;
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const W = ms => new Promise(r => setTimeout(r, ms));
for (const [tag, vp] of [["m", { width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true }], ["d", { width: 1280, height: 800 }]]) {
  const p = await browser.newPage(); await p.setViewport(vp);
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  await p.goto(url, { waitUntil: "networkidle0" }); await W(600);
  await p.screenshot({ path: `${out}/1-home-${tag}.png` });
  await p.click("#goBtn"); await W(350); await p.screenshot({ path: `${out}/2-ice-${tag}.png` });
  await W(1600); await p.screenshot({ path: `${out}/3-count-${tag}.png` });
  const plan = [3, 5, 0, 2, 4, 1, 3];
  for (let i = 0; i < 7; i++) {
    await p.waitForFunction(() => !document.getElementById("form").hidden && !document.getElementById("inp").disabled, { timeout: 9000 });
    const text = await p.evaluate(t => run.items[run.i].p.entries.find(e => e.tier === t).text, plan[i]);
    await W(i === 0 ? 4000 : 300);
    if (i === 0) { await p.type("#inp", text.slice(0, 2) + text[3] + text[2] + text.slice(4)); await p.keyboard.press("Enter"); await W(200); await p.screenshot({ path: `${out}/4-play-typo-${tag}.png` }); await p.keyboard.press("Enter"); }
    else { await p.type("#inp", text); await p.keyboard.press("Enter"); }
    if (i === 1) { await W(1500); await p.screenshot({ path: `${out}/5-sinking-${tag}.png` }); }
    await p.waitForFunction(() => document.getElementById("result").classList.contains("up"), { timeout: 9000 });
    await W(600);
    if (i < 2) await p.screenshot({ path: `${out}/6-result${i}-${tag}.png` });
    await p.click("#nextBtn");
  }
  await W(800); await p.screenshot({ path: `${out}/7-end-${tag}.png`, fullPage: true });
  await p.click("#menuBtn"); await W(500); await p.screenshot({ path: `${out}/8-menu-${tag}.png` });
  await p.click('[data-go="how"]'); await W(300); await p.screenshot({ path: `${out}/9-how-${tag}.png` });
  console.log(tag, "errors:", errs.length ? errs : "none");
  await p.close();
}
await browser.close();
