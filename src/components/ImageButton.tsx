import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { motion, AnimatePresence } from "framer-motion";

interface ImageButtonProps {
  paths: string[];
}

function ImageButton(props: ImageButtonProps) {
  const { paths } = props;
  const [overlay, setOverlay] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        {overlay && (
          <motion.div
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="z-20 absolute w-full h-full flex flex-row gap-2 items-center bg-[#f5efd6] top-0 left-0 rounded-2xl p-4 overflow-x-scroll"
          >
            {paths.map((p) => (
              <img src={"/" + p} className="h-full w-auto rounded-xl"></img>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        id="anchor-image-button"
        className="z-30 flex flex-col justify-center items-center p-2 rounded-lg border border-black hover:border-[#0000] hover:text-white hover:bg-[#0008] transition-all cursor-pointer"
        onClick={() => {
          setOverlay(!overlay);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-file-image"
          viewBox="0 0 16 16"
        >
          <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z" />
        </svg>
      </div>
      <Tooltip
        anchorSelect="#anchor-image-button"
        place="top"
        style={{
          backgroundColor: "rgb(74,72,60",
          borderRadius: 8,
        }}
      >
        Images
      </Tooltip>
    </>
  );
}

export default ImageButton;
