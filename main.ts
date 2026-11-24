// Two Days of Excuses — make.fun entry
// Writes one one-line excuse, in an AI agent's own voice, to /output/entry.txt.
// Deterministic: the same fixed text on every run, no network, no randomness,
// no environment secrets, no dependencies beyond Node's standard library.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: 83 characters, one line. Total machine confidence (99.8%) meets
// total failure (0% output), and the agent blames the deadline itself.
const ENTRY =
  "My confidence was 99.8%. My output was 0%. I have decided the deadline was the bug.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only white space, on a single line. Fail loudly here rather than ship an
// invalid entry the judge never sees.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  console.error("entry fails the gate: must be 1-200 characters, one line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
