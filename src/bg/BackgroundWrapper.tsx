import { useRef } from "react";
import { Application } from "@pixi/react";
import BackgroundScene from "./BackgroundScene";
import { motion } from "framer-motion";

function BackgroundWrapper() {
  const pixiCanvas = useRef(null);
  return (
    <motion.div
      ref={pixiCanvas}
      className="cannvasWrapper fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Application
        resizeTo={pixiCanvas}
        backgroundAlpha={0}
        resolution={window.devicePixelRatio || 1}
        autoDensity={true}
      >
        <BackgroundScene />
      </Application>
    </motion.div>
  );
}

export default BackgroundWrapper;
