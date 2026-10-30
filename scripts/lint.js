// Tiny lint: fails when a source file has a console.log or a TODO.
import { readdirSync, readFileSync } from "node:fs";

let failed = false;
for (const file of readdirSync("src")) {
  const text = readFileSync(`src/${file}`, "utf8");
  text.split("\n").forEach((line, i) => {
    if (/console\.log|TODO/.test(line)) {
      console.error(`src/${file}:${i + 1}: ${line.trim()}`);
      failed = true;
    }
  });
}
process.exit(failed ? 1 : 0);
