// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
// Writes one absurd terms-of-service clause to /output/entry.txt.
// The clause is deadpan legal boilerplate until the absurdity hits:
// a user agrees to lend the Company their firstborn's name for marketing,
// then to pretend they ever read the sentence that took it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Section 14.3: By continuing to use the Service, you agree to lend the Company your firstborn\u2019s name for marketing purposes, and to pretend you read this sentence.";

function main(): void {
  // Gate: exactly one line of 1-200 characters, not only whitespace.
  // The scorer refuses anything outside that range, so fail loudly here.
  if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
    throw new Error("entry fails the 1-200 character gate");
  }
  const target = process.argv[2] ?? "/output";
  const outPath = target.endsWith(".txt") ? target : join(target, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
}

main();
