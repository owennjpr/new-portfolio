// BackgroundWrapper.tsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Application } from "@pixi/react";
import BackgroundScene from "./BackgroundScene";

export default function BackgroundWrapper() {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a div in the body to host the Pixi canvas
    const node = document.createElement("div");
    node.style.position = "fixed"; // full-screen
    node.style.top = "0";
    node.style.left = "0";
    node.style.width = "100%";
    node.style.height = "100%";
    node.style.zIndex = "0"; // behind UI
    node.style.pointerEvents = "none";
    node.style.transform = "none";
    node.style.willChange = "auto";
    node.style.backfaceVisibility = "hidden";

    document.body.prepend(node); // make it first child of body
    setPortalNode(node);

    return () => {
      node.remove();
    };
  }, []);

  if (!portalNode) return null;

  return createPortal(
    <Application
      resizeTo={window} // auto resize
      backgroundAlpha={0} // fully transparent
      resolution={window.devicePixelRatio || 1}
      autoDensity={true}
    >
      <BackgroundScene />
    </Application>,
    portalNode
  );
}
