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
          className="absolute inset-0 pointer-events-none rounded-2xl z-20"
          animate={overlay}
          initial={{ backdropFilter: "blur(0px)" }}
        />
      </div>
    </div>
  );
}
