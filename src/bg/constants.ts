import type { Rules } from "./types";

export const rules: Rules = {
  X: [
    // Original rule
    { rule: "(F[-X]F[-X]+X)", prob: 0.3 },
    { rule: "(F[+X]F[+X]-X)", prob: 0.3 },
    { rule: "(F[-X]+X)", prob: 0.2 },
    { rule: "(F[-X]F[-X]XA)", prob: 0.09 },
    { rule: "(F[-X]F[-X]XB)", prob: 0.09 },
    { rule: "(F[-X]F[-X]XC)", prob: 0.02 },
  ],
  F: [
    // Original
    { rule: "F(F)", prob: 0.8 },
    // Extra growth
    { rule: "F(FF)", prob: 0.1 },
    // Stunted growth
    { rule: "F", prob: 0.1 },
  ],
  "(": "",
  ")": "",
};
