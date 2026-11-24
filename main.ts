// The Funniest Toaster Error Message — writes one line to /output/entry.txt.
//
// The joke: the toaster did its one job perfectly, on time, twice over.
// The malfunction is the human, standing in the kitchen, letting perfectly
// good toast go cold. Deadpan appliance voice, error code and all, turning
// the error report back on its owner.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR E03: Your bread is ready. It has been ready. You are the delay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
