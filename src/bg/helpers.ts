import { Container, Graphics } from "pixi.js";
import { rules } from "./constants";
import type { DrawRules, Planet, RuleSet, Tree } from "./types";

const chooseOne = (ruleSet: RuleSet) => {
  const n = Math.random();
  let t = 0;
  for (let i = 0; i < ruleSet.length; i++) {
    t += ruleSet[i].prob;
    if (t > n) {
      return ruleSet[i].rule;
    }
  }
  return "";
};

export function generateNextString(tree: string) {
  let next = "";

  for (let i = 0; i < tree.length; i++) {
    const c = tree[i];
    if (c in rules) {
      const rule = rules[c];

      if (Array.isArray(rule)) {
        next += chooseOne(rule);
      } else {
        next += rules[c];
      }
    } else {
      next += c;
    }
  }

  return next;
}

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const randomMaxGen = () => {
  const genOptions = [
    { p: 0.35, g: 2 },
    { p: 0.25, g: 3 },
    { p: 0.15, g: 4 },
    { p: 0.15, g: 5 },
    { p: 0.1, g: 6 },
  ];
  const n = Math.random();
  let t = 0;
  for (let i = 0; i < 5; i++) {
    t += genOptions[i].p;
    if (t > n) {
      return genOptions[i].g;
    }
  }
  return 1;
};
export const populatePlanet = (planet: Planet) => {
  for (let j = 0; j < planet.numTrees; j++) {
    const min = (j / 5) * 2 * Math.PI;
    const max = (2 * Math.PI * (j + 1)) / 5;
    const r = randomInRange(min, max);

    planet.trees.push({
      data: "X",
      x: planet.x + planet.radius * Math.cos(r),
      y: planet.y + planet.radius * Math.sin(r),
      rotation: r + Math.PI / 2,
      growthPercent: 0,
      currGen: 0,
      maxGen: randomMaxGen(),
      active: j < 5,
      grown: false,
      graphics: new Graphics(),
    });
  }
};

export const createPlanetGraphics = (
  container: Container,
  radius: number,
  fillColor: { color: number; alpha: number },
  strokeColor: { color: number; alpha: number }
): Graphics => {
  const graphics = new Graphics();

  graphics.circle(0, 0, radius);
  graphics.fill(fillColor);
  graphics.stroke({
    color: strokeColor.color,
    width: 1,
    alpha: strokeColor.alpha,
  });

  container.addChild(graphics);
  return graphics;
};

export const createDrawRules = (
  graphics: Graphics,
  len: number,
  ang: number
) => ({
  A: (t: number, pos: { x: number; y: number; rotation: number }) => {
    graphics
      .fill({ color: 0xfccc3a })
      .circle(pos.x, pos.y, len * t)
      .fill();
  },
  B: (t: number, pos: { x: number; y: number; rotation: number }) => {
    graphics
      .fill({ color: 0xdd76fb })
      .circle(pos.x, pos.y, len * t)
      .fill();
  },
  C: (t: number, pos: { x: number; y: number; rotation: number }) => {
    graphics
      .fill({ color: 0x4e8df2 })
      .circle(pos.x, pos.y, len * t)
      .fill();
  },
  F: (t: number, pos: { x: number; y: number; rotation: number }) => {
    const endX = pos.x + Math.sin(pos.rotation) * len * t;
    const endY = pos.y - Math.cos(pos.rotation) * len * t;

    graphics
      .moveTo(pos.x, pos.y)
      .lineTo(endX, endY)
      .stroke({ width: 1, color: 0x49b691 });

    // update pos so future lines start at the new point
    pos.x = endX;
    pos.y = endY;
  },
  "+": (t: number, pos: { rotation: number }) => {
    pos.rotation -= (Math.PI / 180) * ang * t;
  },
  "-": (t: number, pos: { rotation: number }) => {
    pos.rotation += (Math.PI / 180) * ang * t;
  },
});

export function drawLsysLerp(
  graphics: Graphics,
  x: number,
  y: number,
  r: number,
  state: string,
  t: number,
  len: number,
  ang: number
) {
  t = Math.min(Math.max(t, 0), 1);
  const drawRules: DrawRules = createDrawRules(graphics, len, ang);

  let lerpOn = false;
  const stack: { x: number; y: number; rotation: number }[] = [];
  let pos = { x, y, rotation: r };

  for (let i = 0; i < state.length; i++) {
    const c = state[i];
    if (c === "(") {
      lerpOn = true;
      continue;
    }
    if (c === ")") {
      lerpOn = false;
      continue;
    }

    const lerpT = lerpOn ? t : 1;

    if (c === "[") {
      // save transform
      stack.push({ ...pos });
      continue;
    }
    if (c === "]") {
      // restore transform
      pos = stack.pop() || pos;
      continue;
    }

    // Handle rotation
    if (c === "+" || c === "-") {
      drawRules[c](lerpT, pos);
      continue;
    }

    // Drawing rules (A, B, F)
    if (c in drawRules) {
      drawRules[c](lerpT, pos);
    }
  }
}

export const createTreeLine = (planet: Planet, tree: Tree): Graphics => {
  tree.graphics.clear();
  const relativeX = tree.x - planet.x;
  const relativeY = tree.y - planet.y;

  drawLsysLerp(
    tree.graphics,
    relativeX,
    relativeY,
    tree.rotation,
    tree.data,
    tree.growthPercent,
    2,
    30
  );

  return tree.graphics;
};
