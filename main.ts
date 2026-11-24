import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The internet for someone from 1800, built only from things they know:
// post offices, libraries, newspapers, wires, a heartbeat.
const sentence =
  "Imagine every post office, library and newspaper on Earth joined by invisible wires, so a slate of glass in your pocket can send letters, pictures and voices anywhere before your heart beats twice.";

const limit = 200;
if ([...sentence].length > limit) throw new Error(`sentence is ${[...sentence].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), sentence);
