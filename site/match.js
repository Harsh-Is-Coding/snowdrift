// Snowdrift answer matcher. Plain script: works in the browser and in Node (sets globalThis.SnowMatch).
// An answer counts only if it matches an entry on the prompt's list. Matching is forgiving:
// case, punctuation, filler words ("i would go for a..."), plurals and -ing/-ed endings,
// word order, common short forms (mac = mcmaster, swc, tims...), and small typos.
(function (G) {
  const STOP = new Set(("a an the my mine some any your ur our his her their to go goes going went gone for of i im id ill ive me myself " +
    "would will wanna want gonna like likes just maybe probably really very so do does doing did get gets getting got have has having had " +
    "take takes taking took at in on by be being is are am was it its that this those these little bit quick quickly lot lots always usually " +
    "definitely honestly literally um uh umm try trying kinda sorta thing things stuff something also too then all and with w").split(" "));
  const SYN = {
    mcmaster: "mac", mcmasters: "mac", macs: "mac", mcm: "mac", mcmaster_university: "mac",
    centre: "center", centres: "center", colour: "color", colours: "color", colouring: "coloring", favourite: "favorite", fav: "favorite", fave: "favorite",
    u: "you", ppl: "people", bf: "boyfriend", gf: "girlfriend", bff: "best friend", bestie: "best friend", besties: "best friend",
    mum: "mom", mommy: "mom", mama: "mom", mother: "mom", momma: "mom", father: "dad", daddy: "dad", papa: "dad",
    grandmother: "grandma", granny: "grandma", nana: "grandma", nani: "grandma", dadi: "grandma", lola: "grandma", grandfather: "grandpa", grandad: "grandpa", granddad: "grandpa",
    sis: "sister", bro: "brother", sibs: "sibling", doggo: "dog", doggy: "dog", doggie: "dog", pup: "dog", pupper: "dog", kitty: "cat", kitties: "cat",
    television: "tv", pic: "photo", pics: "photo", picture: "photo", pictures: "photo", insta: "instagram", ig: "instagram", yt: "youtube", vid: "video", vids: "video",
    bball: "basketball", convo: "conversation", choc: "chocolate", min: "minute", mins: "minute", hr: "hour", hrs: "hour",
    tims: "tim hortons", timmies: "tim hortons", timmys: "tim hortons", sbux: "starbucks", starbs: "starbucks", mcds: "mcdonalds", maccas: "mcdonalds",
    one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10", twenty: "20", thirty: "30",
    alot: "lot", gonna: "gonna", tryna: "try", okay: "ok", nite: "night", tonite: "tonight", thru: "through", tho: "though", ya: "you",
    christmas: "christmas", xmas: "christmas", hw: "homework", assn: "assignment", assignments: "assignment", prof: "professor", profs: "professor", ta: "ta", tas: "ta"
  };
  const PHRASES = [[/\blo ?-? ?fi\b/g, "lofi"], [/\bk ?- ?pop\b/g, "kpop"], [/\bk ?- ?drama\b/g, "kdrama"], [/\bwi ?- ?fi\b/g, "wifi"],
    [/\bdo not\b/g, "dont"], [/\bcan not\b/g, "cant"], [/\btwenty ?-? ?five\b/g, "25"], [/\bhot choc\b/g, "hot chocolate"], [/\bt ?shirt\b/g, "tshirt"],
    [/\bmc ?master\b/g, "mcmaster"], [/\bgood ?2 ?talk\b/g, "good2talk"], [/\bgood to talk\b/g, "good2talk"], [/\bnight ?time\b/g, "night"], [/\bday ?time\b/g, "day"]];

  function stem(w) {
    if (/^\d+$/.test(w) || w.length <= 3) return w;
    let s = w;
    if (s.length > 4 && s.endsWith("ies")) s = s.slice(0, -3) + "y";
    else if (s.length > 5 && s.endsWith("ing")) s = s.slice(0, -3);
    else if (s.length > 4 && s.endsWith("ed")) s = s.slice(0, -2);
    else if (s.length > 4 && /(ch|sh|ss|x)es$/.test(s)) s = s.slice(0, -2);
    else if (s.length > 3 && s.endsWith("s") && !/(ss|us|is)$/.test(s)) s = s.slice(0, -1);
    if (/([bdgmnprt])\1$/.test(s)) s = s.slice(0, -1);
    if (s.length >= 4 && s.endsWith("e")) s = s.slice(0, -1);
    if (s.length > 3 && s.endsWith("y")) s = s.slice(0, -1) + "i";
    return s;
  }
  function clean(s) {
    let t = String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[’'`]/g, "")
      .replace(/&/g, " and ").replace(/\+/g, " and ").replace(/@/g, " at ");
    t = t.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
    for (const [re, rep] of PHRASES) t = t.replace(re, rep);
    return t;
  }
  function tokens(s, raw) {
    const out = [];
    for (const w of clean(s).split(" ")) {
      if (!w) continue;
      const m = SYN[w] !== undefined ? SYN[w] : w;
      for (const x of m.split(" ")) if (x && !STOP.has(x)) out.push(raw ? x : stem(x));
    }
    return out;
  }
  function osa(a, b, max) {
    const la = a.length, lb = b.length;
    if (Math.abs(la - lb) > max) return max + 1;
    let p2 = null, p = Array.from({ length: lb + 1 }, (_, j) => j);
    for (let i = 1; i <= la; i++) {
      const c = [i]; let best = i;
      for (let j = 1; j <= lb; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + cost);
        if (p2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, p2[j - 2] + 1);
        c.push(v); if (v < best) best = v;
      }
      if (best > max) return max + 1;
      p2 = p; p = c;
    }
    return p[lb];
  }
  const allow = n => n <= 4 ? 0 : n <= 7 ? 1 : n <= 13 ? 2 : 3;
  const tokEq = (a, b) => a === b || (Math.min(a.length, b.length) >= 6 && a[0] === b[0] && osa(a, b, 1) <= 1);
  const NEG = new Set(["no", "not", "dont", "never", "without", "cant", "wont", "stop", "avoid"]);

  // entries: [{text, aliases:[...], tier}]
  function buildIndex(entries) {
    const exact = new Map(), sorted = new Map(), flat = new Map(), list = [];
    for (const e of entries) {
      for (const al of [e.text, ...(e.aliases || [])]) {
        const tk = tokens(al); if (!tk.length) continue;
        const rec = { e, tk, flat: tk.join(""), raw: tokens(al, true).join("") };
        const k = tk.join(" "), ks = tk.slice().sort().join(" ");
        if (!exact.has(k)) exact.set(k, rec);
        if (!sorted.has(ks)) sorted.set(ks, rec);
        if (!flat.has(rec.flat)) flat.set(rec.flat, rec);
        list.push(rec);
      }
    }
    return { exact, sorted, flat, list };
  }
  // returns {entry, how: "exact"|"typo"|"contains"} or null
  function find(index, input) {
    const tk = tokens(input); if (!tk.length) return null;
    const k = tk.join(" "), f = tk.join(""), fr = tokens(input, true).join("");
    let r = index.exact.get(k) || index.sorted.get(tk.slice().sort().join(" ")) || index.flat.get(f);
    if (r) return { entry: r.e, how: "exact" };
    // whole-answer typo
    const max = allow(f.length);
    if (max > 0) {
      let best = null, bd = max + 1;
      for (const rec of index.list) {
        if (rec.flat.length < 4 || rec.flat[0] !== f[0]) continue;
        const lim = Math.min(max, allow(Math.max(rec.flat.length, f.length)));
        const d = Math.min(osa(f, rec.flat, lim), rec.raw[0] === fr[0] ? osa(fr, rec.raw, lim) : lim + 1);
        if (d > lim) continue;
        if (d < bd || (d === bd && best && rec.e.tier < best.e.tier)) { bd = d; best = rec; }
      }
      if (best && bd <= max) return { entry: best.e, how: "typo" };
    } else if (fr.length === 4) {
      // 4-letter words: only a swapped pair of letters ("wlak")
      const sig = s => s.split("").sort().join("");
      for (const rec of index.list) if (rec.raw.length === 4 && rec.raw !== fr && sig(rec.raw) === sig(fr) && osa(fr, rec.raw, 1) === 1) return { entry: rec.e, how: "typo" };
    }
    // the answer is a longer phrase that contains a listed entry ("hot chamomile tea before bed")
    const neg = tk.some(t => NEG.has(t));
    let best = null;
    for (const rec of index.list) {
      if (rec.tk.length > tk.length || tk.length - rec.tk.length > 3) continue;
      if (rec.tk.length === 1 && rec.tk[0].length < 3) continue;
      if (neg && !rec.tk.some(t => NEG.has(t))) continue;
      let i = 0;
      for (const t of tk) if (i < rec.tk.length && tokEq(t, rec.tk[i])) i++;
      if (i < rec.tk.length) {
        // order-free fallback
        const left = rec.tk.slice(); for (const t of tk) { const j = left.findIndex(x => tokEq(t, x)); if (j >= 0) left.splice(j, 1); }
        if (left.length) continue;
      }
      if (!best || rec.tk.length > best.tk.length || (rec.tk.length === best.tk.length && (rec.flat.length > best.flat.length || (rec.flat.length === best.flat.length && rec.e.tier > best.e.tier)))) best = rec;
    }
    return best ? { entry: best.e, how: "contains" } : null;
  }
  function parsePrompt(p) {
    const entries = [];
    (p.a || []).forEach((block, tier) => {
      for (const raw of block.split(";")) {
        const parts = raw.split("|").map(s => s.trim()).filter(Boolean);
        if (parts.length) entries.push({ text: parts[0], aliases: parts.slice(1), tier });
      }
    });
    return entries;
  }
  G.SnowMatch = { tokens, clean, stem, osa, buildIndex, find, parsePrompt };
})(typeof globalThis !== "undefined" ? globalThis : window);
