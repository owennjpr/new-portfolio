import type { Container, Graphics } from "pixi.js";

export type RuleSet = { rule: string; prob: number }[];

export type Rules = {
  [key: string]: RuleSet | string;
};

export type DrawRules = {
  [key: string]: (
    t: number,
    state: { x: number; y: number; rotation: number }
  ) => void;
};

export type Tree = {
  data: string;
  x: number;
  y: number;
  rotation: number;
  growthPercent: number;
  currGen: number;
  maxGen: number;
  active: boolean;
  grown: boolean;
  graphics: Graphics;
};

export type Planet = {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  numTrees: number;
  trees: Tree[];
  graphics: Graphics;
  staticContainer: Container;
  dynamicContainer: Container;
  nextToGrow: number;
};
