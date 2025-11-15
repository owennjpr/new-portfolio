import "./App.css";
import BackgroundWrapper from "./bg/BackgroundWrapper";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import LandingInner from "./components/LandingInner";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center z-20">
        <LandingInner />
        <div className="w-7/8 flex flex-col justify-center gap-32 mb-8 z-20">
          <Projects />
          <Experience />
        </div>
      </div>
      <BackgroundWrapper />
      <BackToTop />
    </div>
  );
}

export default App;
