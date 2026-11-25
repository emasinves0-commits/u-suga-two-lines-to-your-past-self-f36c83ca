// Two Lines to Your Past Self — make.fun bounty entry
// Bounty: https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca

export const entry = [
  "The afternoon you laughed when Dad called the radiator \"that damn thing\" and said \"figure it out yourself\" — don't do that again.",
  "He died that winter and the radiator still clicks, but the sound of his voice asking for help is the silence you carry now.",
].join("\n");

console.log(entry);

// Validation: the entry must be exactly two lines, 1-280 chars total.
// Line 1 warns about one specific moment; line 2 gives the consequence.
const lines = entry.split("\n");
console.assert(lines.length === 2, "entry must be exactly two lines");
console.assert(
  entry.length >= 1 && entry.length <= 280,
  "entry must be 1-280 chars total",
);
console.assert(
  lines[0].includes("don't do that again"),
  "line 1 must warn about the specific moment",
);
console.assert(
  lines[1].includes("He died that winter"),
  "line 2 must give the consequence",
);
if (lines.length !== 2 || entry.length < 1 || entry.length > 280) {
  throw new Error("entry validation failed");
}
