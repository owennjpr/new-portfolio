import { useEffect, useRef } from "react";
import p5 from "p5";

export default function PlanetBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  type RuleSet = { rule: string; prob: number }[];

  type Rules = {
    [key: string]: RuleSet | string;
  };

  type DrawRules = {
    [key: string]: (t: number) => void;
  };

  useEffect(() => {
    const sketch = (p: any) => {
      // Based off of Barney Codes' L Systems tutorial

      // Surrond items that we want to lerp with () in the rules
      // () characters are then stripped from the next generation
      const rules: Rules = {
        X: [
          // Original rule
          { rule: "(F[-X]F[-X]+X)", prob: 0.3 },
          { rule: "(F[+X]F[+X]-X)", prob: 0.3 },
          { rule: "(F[-X]+X)", prob: 0.2 },
          { rule: "(F[-X]F[-X]XA)", prob: 0.1 },
          { rule: "(F[-X]F[-X]XB)", prob: 0.1 },
        ],
        F: [
          // Original rule
          { rule: "F(F)", prob: 0.8 },
          // Stunted growth
          { rule: "F", prob: 0.2 },
        ],
        "(": "",
        ")": "",
      };

      const len = 2;
      const ang = 30;

      let drawRules: DrawRules;

      let planets: {
        x: number;
        y: number;
        rad: number;
        rot: number;
        numTrees: number;
        trees: { data: string; x: number; y: any; r: any }[];
      }[];

      const maxGeneration = 6;
      let currGeneration = 0;

      let growthPercent = 1;
      const growthRate = 0.015;

      const rotateSpeed = 0.001;
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.strokeWeight(1);

        planets = [
          {
            x: p.width * 0.4,
            y: p.height * 0.3,
            rad: p.width * 0.1,
            rot: 0,
            numTrees: 8,
            trees: [],
          },
          {
            x: p.width * 0.8,
            y: p.height * 0.75,
            rad: p.width * 0.075,
            rot: 0,
            numTrees: 6,
            trees: [],
          },
          {
            x: p.width * 0.1,
            y: p.height,
            rad: p.width * 0.33,
            rot: 0,
            numTrees: 10,
            trees: [],
          },
        ];
        for (let i = 0; i < planets.length; i++) {
          const planet = planets[i];
          for (let j = 0; j < planet.numTrees; j++) {
            const r = p.random((j / 5) * 2 * p.PI, (2 * p.PI * (j + 1)) / 5);
            planet.trees.push({
              data: "X",
              x: planet.x + planet.rad * p.cos(r),
              y: planet.y + planet.rad * p.sin(r),
              r: r + p.PI / 2,
            });
          }
        }

        drawRules = {
          A: (t: number) => {
            p.noStroke();
            p.fill("#FEE144");
            p.circle(0, 0, len * 2 * t);
          },
          B: (t: number) => {
            p.noStroke();
            p.fill("#DD76FB");
            p.circle(0, 0, len * 2 * t);
          },
          F: (t: number) => {
            p.stroke("#49B691");
            p.line(0, 0, 0, -len * t);
            p.translate(0, -len * t);
          },
          "+": (t: number) => {
            // Rotat#109472
            p.rotate((p.PI / 180) * -ang * t);
          },
          "-": (t: number) => {
            // Rotate right
            p.rotate((p.PI / 180) * ang * t);
          },
          // Save current location
          "[": () => {
            p.push();
          },
          // Restore last location
          "]": () => {
            p.pop();
          },
        };
      };

      p.draw = () => {
        p.background("#F3EBC8");
        for (let i = 0; i < planets.length; i++) {
          const planet = planets[i];
          p.push();
          p.translate(planet.x, planet.y);
          p.rotate(planet.rot);
          planet.rot += rotateSpeed;
          p.fill("#49B69110");
          p.stroke("#0008");
          p.circle(0, 0, planet.rad * 2);

          planet.trees.map((t) => {
            drawLsysLerp(
              t.x - planet.x,
              t.y - planet.y,
              t.r,
              t.data,
              growthPercent
            );
          });
          p.pop();
        }

        if (growthPercent < 1) {
          const mod = currGeneration + growthPercent;
          growthPercent += growthRate / mod;
        } else {
          nextGeneration();
        }
      };

      function nextGeneration() {
        if (growthPercent < 1) {
          return;
        }

        if (currGeneration === maxGeneration) {
          return;
        }

        for (let i = 0; i < planets.length; i++) {
          const planet = planets[i];
          planet.trees = planet.trees.map((w) => {
            return { x: w.x, y: w.y, r: w.r, data: generate(w.data) };
          });
        }

        currGeneration++;
        growthPercent = 0;
      }

      function generate(tree: string) {
        let next = "";

        for (let i = 0; i < tree.length; i++) {
          let c = tree[i];
          if (c in rules) {
            let rule = rules[c];

            // Check if we're using an array or not
            if (Array.isArray(rule)) {
              next += chooseOne(rule); // If we are, choose one of the options
            } else {
              next += rules[c]; // Otherwise use the rule directly
            }
          } else {
            next += c;
          }
        }

        return next;
      }

      function chooseOne(ruleSet: RuleSet) {
        let n = p.random(); // Random number between 0-1
        let t = 0;
        for (let i = 0; i < ruleSet.length; i++) {
          t += ruleSet[i].prob; // Keep adding the probability of the options to total
          if (t > n) {
            // If the total is more than the random value
            return ruleSet[i].rule; // Choose that option
          }
        }
        return "";
      }

      function drawLsysLerp(
        x: number,
        y: number,
        r: number,
        state: string,
        t: number
      ) {
        t = p.constrain(t, 0, 1);

        let lerpOn = false;

        p.push();
        p.translate(x, y);
        p.rotate(r);
        for (let i = 0; i < state.length; i++) {
          let c = state[i];

          if (c === "(") {
            lerpOn = true;
          } else if (c === ")") {
            lerpOn = false;
          }

          let lerpT = t;

          if (!lerpOn) {
            lerpT = 1;
          }

          if (c in drawRules) {
            drawRules[c](lerpT);
          }
        }
        p.pop();
      }
    };

    const instance = new p5(sketch, containerRef.current!);
    return () => instance.remove();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full fixed top-0 left-0 -z-50"
    />
  );
}
