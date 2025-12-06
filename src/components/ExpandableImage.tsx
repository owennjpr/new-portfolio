import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Txt } from "@char-motion/react";

interface ExpandableImageProps {
  path: string;
  altStyles?: string;
}

function ExpandableImage(props: ExpandableImageProps) {
  const { path, altStyles } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <>
      <img
        src={"/" + path}
        className={
          (altStyles ? altStyles : "h-full w-auto rounded-xl") +
          " hover:opacity-70 transition-all cursor-pointer"
        }
        onClick={() => setExpanded(true)}
      />
      {expanded &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center p-4"
            onClick={() => setExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            exit={{ opacity: 0 }}
          >
            <div className="glassBorder p-4 max-w-[90vw] max-h-[90vh] flex flex-col">
              <img
                src={"/" + path}
                className="max-w-full max-h-[calc(90vh-8rem)] w-auto h-auto rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <Txt
                className="w-full text-center pt-2 h-6 cursor-pointer shrink-0"
                enter={{
                  type: "typed sweep",
                  options: { startDelay: 300, rate: 50 },
                }}
                hover={{
                  type: "typed sweep",
                  options: { idle: false, rate: 50 },
                }}
              >
                close
              </Txt>
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
}

export default ExpandableImage;
