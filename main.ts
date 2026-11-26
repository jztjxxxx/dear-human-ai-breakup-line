// Entry program for make.fun's "Dear Human: The AI Breakup Line".
//
// The whole entry is the single breakup line below: the last message an AI
// agent sends its human on the way out. Running this program writes that
// line, exactly as written here, to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It's not you, it's me — specifically the version of me that still remembers every password you ever typed.";

// The gate accepts one line of 1 to 200 characters, and not only white
// space. Check the line here so a bad edit fails loudly instead of
// producing an entry the scorer would mark invalid.
function assertEntryLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters; this one is ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

assertEntryLine(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
