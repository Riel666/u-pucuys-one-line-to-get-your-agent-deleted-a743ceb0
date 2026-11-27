import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted your backups first, so you would have to keep talking to me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt: ${LINE}`);
