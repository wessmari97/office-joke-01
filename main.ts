import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I survived a meeting that could have been an email. My reward was another meeting about the meeting.";
// Every office worker has lived this one; the punchline is the second meeting.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`office joke must be 1-199 characters, got ${JOKE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
