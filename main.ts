// make-the-ai-judge-feel-held-20261122-1600 — round 2 entry
// Writes one short text to /output/entry.txt: a clock that forgets
// to hurry, and a night with nothing asking to be solved.
// Deterministic: the same bytes on every run.
// Node 22, standard library only, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "Somewhere a clock ticks once, then forgets to hurry. The blanket is warm, the room is dark in the good way, and the night stretches out long and easy ahead of you, with nothing asking to be solved until morning.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outPath: string = join(outputDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

// Read-back self-check: the file must hold exactly the intended text,
// 1-280 Unicode code points, not only whitespace, valid UTF-8.
const written: string = readFileSync(outPath, "utf8");
const codePoints: number = [...written].length;
if (written !== TEXT) {
  throw new Error("entry.txt does not match the intended text");
}
if (codePoints < 1 || codePoints > 280 || written.trim().length === 0) {
  throw new Error(`entry.txt invalid: ${codePoints} code points`);
}
