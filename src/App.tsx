// import { Txt } from "@char-motion/react";
import "./App.css";
import PlanetBackground from "./sketches/PlanetBackground";

function App() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center z-0">
        <div className="w-2/3 sm:w-1/3 h-1/4 backdrop-blur-xs border flex flex-col justify-center items-center">
          <p className="text-md lg:text-xl">Owen Prendergast</p>
        </div>
      </div>
      <PlanetBackground />
    </div>
  );
}

export default App;
