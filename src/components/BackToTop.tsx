import { Txt } from "@char-motion/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [visible, setVisible] = useState<boolean>(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 1200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="glassBorder fixed bottom-0 right-0 p-2 sm:p-4 m-2 sm:m-4 text-sm sm:text-base cursor-pointer"
          onClick={scrollTop}
          initial={{ translateX: 200 }}
          animate={{
            translateX: 0,
            transition: { duration: 0.5, ease: "backInOut" },
          }}
          exit={{ translateX: 200 }}
        >
          <Txt hover={{ type: "case" }}>back to top</Txt>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
