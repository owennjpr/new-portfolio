import { useEffect, useRef } from "react";
import { useApplication } from "@pixi/react";
import { Container, Sprite, Texture } from "pixi.js";
import type { Planet, Tree } from "./types";
import {
  populatePlanet,
  createPlanetGraphics,
  generateNextString,
  createTreeLine,
} from "./helpers";

function BackgroundScene() {
  const { app } = useApplication();
  const planetsRef = useRef<Planet[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Setup and cleanup
  useEffect(() => {
    if (!app) return;

    let running = true;

    // Initialize planets
    const initializePlanets = () => {
      if (!app) return;

      // Clear existing planets
      planetsRef.current.forEach((planet) => {
        planet.staticContainer.destroy({ children: true });
        planet.dynamicContainer.destroy({ children: true });
      });
      planetsRef.current = [];

      const width = app.renderer.width;
      const height = app.renderer.height;

      const planetConfigs: Pick<Planet, "x" | "y" | "radius" | "numTrees">[] = [
        {
          x: width * 0.4,
          y: height * 0.3,
          radius: width * 0.1,
          numTrees: 60,
        },
        {
          x: width * 0.8,
          y: height * 0.75,
          radius: width * 0.075,
          numTrees: 30,
        },
        {
          x: width * 0.1,
          y: height,
          radius: width * 0.33,
          numTrees: 90,
        },
      ];

      // Create planets
      planetConfigs.forEach((config) => {
        const dynamicContainer = new Container();
        const staticContainer = new Container();

        dynamicContainer.x = config.x;
        dynamicContainer.y = config.y;
        app.stage.addChild(dynamicContainer);

        staticContainer.x = config.x;
        staticContainer.y = config.y;
        app.stage.addChild(staticContainer);

        const graphics = createPlanetGraphics(
          staticContainer,
          config.radius,
          { color: 0x49b691, alpha: 0.1 },
          { color: 0x000000, alpha: 0.5 }
        );
        const planet = {
          x: config.x,
          y: config.y,
          radius: config.radius,
          rotation: 0,
          numTrees: config.numTrees,
          trees: [],
          graphics: graphics,
          staticContainer: staticContainer,
          dynamicContainer: dynamicContainer,
          nextToGrow: 4,
        };
        populatePlanet(planet);

        planetsRef.current.push(planet);
      });
    };

    // Animation loop
    const animate = () => {
      if (!app || !running) return;

      const rotateSpeed = 0.0005;

      planetsRef.current.forEach((planet) => {
        planet.rotation += rotateSpeed;
        planet.staticContainer.rotation = planet.rotation;
        planet.dynamicContainer.rotation = planet.rotation;

        planet.dynamicContainer.removeChildren();

        planet.trees.forEach((t: Tree) => {
          if (t.grown || !t.active) return;

          if (t.growthPercent < 1) {
            const mod = t.currGen + t.growthPercent;
            t.growthPercent += 0.01 / mod;
          } else {
            if (t.currGen === t.maxGen) {
              t.grown = true;
              if (t.graphics) {
                const root = t.rootOffset!;
                const bounds = t.graphics.getLocalBounds();
                const rt: Texture = app.renderer.generateTexture(t.graphics);
                const sprite = Sprite.from(rt);
                sprite.anchor.set(
                  (root.x - bounds.x) / bounds.width,
                  (root.y - bounds.y) / bounds.height
                );
                sprite.x = root.x;
                sprite.y = root.y;

                planet.staticContainer.addChild(sprite);
                t.sprite = sprite;
                t.rt = rt;

                t.graphics?.destroy(true);
                t.graphics = undefined;
              }

              t.active = false;
              planet.nextToGrow++;
              if (planet.nextToGrow < planet.trees.length)
                planet.trees[planet.nextToGrow].active = true;
              return;
            } else {
              t.growthPercent = 0;
              t.currGen++;
              t.data = generateNextString(t.data);
            }
          }
          planet.dynamicContainer.addChild(createTreeLine(planet, t));
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initializePlanets();
    animate();

    // const handleResize = () => {
    //   initializePlanets();
    // };

    // window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      running = false;
      // window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
      planetsRef.current.forEach((planet) => {
        planet.trees.forEach((t) => {
          t.sprite?.destroy({
            children: true,
            texture: false,
            textureSource: false,
          });
          t.sprite = undefined;
          t.rt?.destroy(true);
          t.rt = undefined;
          t.graphics?.destroy({ children: true });
          t.graphics = undefined;
        });
        planet.staticContainer.destroy({ children: true });
        planet.dynamicContainer.destroy({ children: true });
      });
      planetsRef.current = [];
    };
  }, [app]);

  return <></>;
}

export default BackgroundScene;
