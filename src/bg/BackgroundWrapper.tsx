import { useRef } from "react";
import { Application } from "@pixi/react";
import BackgroundScene from "./BackgroundScene";
// import { motion } from "framer-motion";

function BackgroundWrapper() {
  const pixiCanvas = useRef(null);
  return (
    <div
      ref={pixiCanvas}
      className="canvasWrapper fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
    >
      <Application
        resizeTo={pixiCanvas}
        backgroundAlpha={0}
        resolution={window.devicePixelRatio || 1}
        autoDensity={true}
      >
        <BackgroundScene />
      </Application>
    </div>
  );
}

export default BackgroundWrapper;
