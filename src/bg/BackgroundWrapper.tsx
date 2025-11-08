import { useRef } from "react";
import { Application } from "@pixi/react";
import BackgroundScene from "./BackgroundScene";

function BackgroundWrapper() {
  const pixiCanvas = useRef(null);
  return (
    <div ref={pixiCanvas} className="fixed top-0 left-0 w-full h-screen -z-20">
      <Application
        resizeTo={pixiCanvas}
        background={"#F3EBC8"}
        resolution={window.devicePixelRatio || 1}
        autoDensity={true}
      >
        <BackgroundScene />
      </Application>
    </div>
  );
}

export default BackgroundWrapper;
