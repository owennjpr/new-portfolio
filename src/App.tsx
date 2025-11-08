import "./App.css";
import BackgroundWrapper from "./bg/BackgroundWrapper";
import LandingInner from "./components/LandingInner";

function App() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center z-0">
        <LandingInner />
      </div>
      <BackgroundWrapper />
    </div>
  );
}

export default App;
