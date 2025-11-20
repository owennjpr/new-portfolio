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
          className="fixed bottom-0 right-0 p-2 sm:p-4 text-sm sm:text-base cursor-pointer"
          onClick={scrollTop}
          initial={{ translateX: 200 }}
          animate={{
            translateX: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ translateX: 200 }}
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.5)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
            borderBottom: 0,
            borderRight: 0,
            borderTopLeftRadius: 16,
            backgroundColor: "#f5efd6",
            zIndex: 30,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Txt hover={{ type: "case" }}>back to top</Txt>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
