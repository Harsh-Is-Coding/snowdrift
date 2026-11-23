// Builds one self-contained file from site/game.html + its scripts.
//   ../Snowdrift.html            double-click to play offline (full HTML document)
//   <out2> (optional argument)   page body for publishing as a Claude artifact
import fs from "node:fs";
const site = new URL("../site/", import.meta.url);
let html = fs.readFileSync(new URL("game.html", site), "utf8");
for (const f of ["match.js", "answers.js", "answers2.js"]) {
  const tag = `<script src="${f}"></script>`;
  if (!html.includes(tag)) throw new Error("missing " + tag);
  const js = fs.readFileSync(new URL(f, site), "utf8").replace(/<\/script/gi, "<\\/script");
  html = html.replace(tag, () => `<script>\n${js}\n</script>`);
}
const doc = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n</head>\n<body>\n${html}\n</body>\n</html>\n`;
fs.writeFileSync(new URL("../Snowdrift.html", import.meta.url), doc);
fs.writeFileSync(new URL("../index.html", import.meta.url), doc); // GitHub Pages serves this one
console.log("wrote Snowdrift.html", (doc.length / 1024).toFixed(0) + " KB");
if (process.argv[2]) { fs.writeFileSync(process.argv[2], html); console.log("wrote", process.argv[2]); }
