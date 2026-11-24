import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Our team building was trust falls. I fell. Nobody caught me. HR called it 'a learning experience.'";
// Trust falls, but nobody caught anyone — and HR rebranded the failure.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`office joke must be 1-199 characters, got ${JOKE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
