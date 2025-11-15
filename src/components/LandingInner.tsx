import { Txt } from "@char-motion/react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
export default function LandingInner() {
  const [step, setStep] = useState<number>(0);
  const [targetWidth, setTargetWidth] = useState<number>(
    window.innerWidth * 0.4
  );
  const targetHeight = 350;
  const overlay = useAnimation();
  const internal = useAnimation();

  const explorePressed = () => {
    const target = document.getElementById("projects");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("resizing");
      setTargetWidth(Math.max(window.innerWidth * 0.5, 350));
    };

    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (step > 1) {
      internal.start({
        width: targetWidth,
        height: targetHeight,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [targetWidth, internal, step]);

  useEffect(() => {
    const animateStep = async () => {
      switch (step) {
        case 0:
          await internal.start({
            opacity: 1,
            width: 150,
            height: 50,
            transition: { duration: 1 },
          });
          await new Promise((r) => setTimeout(r, 1000));
          setStep(1);
          break;
        case 1:
          await overlay.start({
            backdropFilter: "blur(20px)",
            transition: { duration: 1, ease: "easeInOut" },
          });
          await internal.start({
            opacity: 0,
            width: targetWidth,
            height: targetHeight,
            transition: { duration: 1 },
          });
          setStep(2);
          break;
        case 2:
          await Promise.all([
            internal.start({
              opacity: 1,
              transition: { duration: 1 },
            }),
            overlay.start({
              backdropFilter: "blur(0px)",
              transition: { duration: 1, ease: "easeInOut" },
            }),
          ]);
          break;
      }
    };
    animateStep();
  }, [overlay, internal, step, targetWidth]);

  return (
    <div className="w-full h-screen flex justify-center items-center p-8 z-20">
      <div className="relative">
        {step < 5 && (
          <motion.div
            layout
            className="relative flex flex-col justify-center items-center  glassBorder"
            transition={{ layout: { duration: 1, ease: "easeInOut" } }}
          >
            <AnimatePresence mode="wait">
              {step < 2 ? (
                <motion.div
                  key="intro"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={internal}
                  className="flex justify-center items-center text-center"
                >
                  <Txt
                    enter={{
                      type: "typed sweep",
                      options: { startDelay: 200 },
                    }}
                  >
                    Hi, I'm Owen
                  </Txt>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  initial={{
                    opacity: 1,
                    width: targetWidth,
                    height: targetHeight,
                  }}
                  animate={internal}
                  className="flex flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="flex flex-row gap-2 items-baseline">
                    <Txt
                      className="text-xl md:text-2xl"
                      enter={{
                        type: "typed sweep",
                        options: { startDelay: 500 },
                      }}
                    >
                      Owen Prendergast
                    </Txt>
                    <Txt
                      enter={{
                        type: "typed sweep",
                        options: { startDelay: 1500 },
                      }}
                      className="text-sm md:text-base"
                    >
                      he/him
                    </Txt>
                  </div>
                  <Txt
                    enter={{
                      type: "randomized",
                      options: { startDelay: 1000, maxDelay: 1500 },
                    }}
                    className="px-8 text-sm md:text-base"
                  >
                    I'm a Full-Stack developer and recent CS/STS grad from Tufts
                    University, originally from Seattle, Washington. My work
                    focuses on web development, creative audio applications, and
                    software designed for social impact. Explore this site to
                    see everything I have been working on!
                  </Txt>
                  <Txt
                    enter={{
                      type: "typed sweep",
                      options: { startDelay: 2500 },
                    }}
                    hover={{ type: "shuffle" }}
                    className="font-semibold text-emerald-600 cursor-pointer"
                    onClick={explorePressed}
                  >
                    Explore
                  </Txt>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Foreground overlay blur layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={overlay}
          initial={{ backdropFilter: "blur(0px)" }}
        />
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-row gap-2 items-center justify-center">
          <a href="https://github.com/owennjpr">
            <svg
              width={16}
              height={16}
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/owen-prendergast-351726277/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="20"
              height="20"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </a>
          <a href="mailto:owenprendergast8@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </a>
        </div> */
}
