import BackgroundWrapper from "../bg/BackgroundWrapper";
import BackToTop from "../components/BackToTop";
import LandingInner from "../components/LandingInner";
import Socials from "../components/Socials";
import ExperienceFreebites from "../components/experience/ExperienceFreebites";
import ExperienceIDEALab from "../components/experience/ExperienceIDEALab";
import ExperienceIDTech from "../components/experience/ExperienceIDTech";
import ExperienceJumboCode from "../components/experience/ExperienceJumboCode";
import ExperienceSoundSketch from "../components/experience/ExperienceSoundSketch";
import ExperienceTA from "../components/experience/ExperienceTA";
import ExperienceThriftway from "../components/experience/ExperienceThriftway";
import Aquae from "../components/music/Aquae";
import ColorCoding from "../components/music/ColorCoding";
import OtherSoundtracks from "../components/music/OtherSoundtracks";
import OtherWorks from "../components/music/OtherWorks";
import Petal from "../components/music/Petal";
import Smokejumpers from "../components/music/Smokejumpers";
import StandingBy from "../components/music/StandingBy";
import Subsuming from "../components/music/Subsuming";
import ProjectCharMotion from "../components/projects/ProjectCharMotion";
import ProjectCoeqwal from "../components/projects/ProjectCoeqwal";
import ProjectFormerlyMe from "../components/projects/ProjectFormerlyMe";
import ProjectPeakSynth from "../components/projects/ProjectPeakSynth";
import ProjectPortfolio from "../components/projects/ProjectPortfolio";
import ProjectWAOT from "../components/projects/ProjectWAOT";

function Grad() {
  return (
    <div>
      <BackgroundWrapper />
      <div className="w-full flex flex-col justify-center items-center">
        <LandingInner
          textBody="I'm a musician, full-stack developer, and recent CS/STS grad from Tufts
                    University, originally from Seattle, Washington. My work
                    focuses on electronic music, creative audio programming, web development,
                    and software designed for social impact. Explore this site to
                    see everything I have been working on!"
        />
        <div className="w-7/8 max-w-340 flex flex-col justify-center gap-32 mb-8">
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl pt-16 z-10" id="projects">
              MUSICAL RELEASES
            </p>
            <div className="glassBorder p-4 relative">
              <p className="text-sm sm:text-base text-center">
                In 2023 I created the musical alias "formerly." to share the
                electronic ambient music I had been creating, starting with the
                album Color Coding, Vol. 1. Since then I have released 3
                additional albums and 2 singles, accumulating over 1.4 million
                streams between platforms. For a more thorough look at my work
                under this name, check out{" "}
                <a
                  className="text-emerald-600"
                  href="https://formerly.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  formerly.me
                </a>{" "}
                (linked in the technical projects section) and see my full
                discography below.
              </p>
            </div>
            <ColorCoding />
            <Petal />
            <div className="grid lg:grid-cols-2 lg:flex-row gap-8">
              <Aquae />
              <Subsuming />
            </div>
            <OtherWorks />
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl z-10" id="projects">
              ORIGINAL SOUNDTRACKS
            </p>
            <Smokejumpers />
            <div className="grid lg:grid-cols-2 lg:flex-row gap-8">
              <StandingBy />
              <OtherSoundtracks />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl z-10" id="projects">
              TECHNICAL PROJECTS
            </p>
            <ProjectFormerlyMe />
            <ProjectPeakSynth />
            <ProjectCharMotion />
            <ProjectCoeqwal />
            <ProjectWAOT />
            <ProjectPortfolio />
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl z-10">WORK EXPERIENCE</p>
            <ExperienceFreebites />
            <div className="grid lg:grid-cols-2 lg:flex-row gap-8">
              <ExperienceTA />
              <ExperienceJumboCode />
              <ExperienceIDTech />
              <ExperienceThriftway />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl z-10">RESEARCH EXPERIENCE</p>
            <ExperienceIDEALab />
            <ExperienceSoundSketch />
          </div>
        </div>
      </div>
      <Socials />
      <BackToTop />
    </div>
  );
}

export default Grad;
