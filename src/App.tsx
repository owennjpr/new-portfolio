import "./App.css";
import BackgroundWrapper from "./bg/BackgroundWrapper";
import BackToTop from "./components/BackToTop";
import Experience from "./components/Experience";
import LandingInner from "./components/LandingInner";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <BackgroundWrapper />
      <div className="w-full flex flex-col justify-center items-center">
        <LandingInner />
        <div className="w-7/8 flex flex-col justify-center gap-32 mb-8">
          <Projects />
          <Experience />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
