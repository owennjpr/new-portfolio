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
import ProjectCharMotion from "../components/projects/ProjectCharMotion";
import ProjectCoeqwal from "../components/projects/ProjectCoeqwal";
import ProjectFormerlyMe from "../components/projects/ProjectFormerlyMe";
import ProjectPeakSynth from "../components/projects/ProjectPeakSynth";
import ProjectWAOT from "../components/projects/ProjectWAOT";

function Grad() {
  return (
    <div>
      <BackgroundWrapper />
      <div className="w-full flex flex-col justify-center items-center">
        <LandingInner
          textBody="I'm a musician, full-stack developer and recent CS/STS grad from Tufts
                    University, originally from Seattle, Washington. My work
                    focuses on web development, creative audio applications, and
                    software designed for social impact. Explore this site to
                    see everything I have been working on!"
        />
        <div className="w-7/8 max-w-340 flex flex-col justify-center gap-32 mb-8">
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl pt-16" id="projects">
              TECHNICAL PROJECTS
            </p>
            <ProjectFormerlyMe />
            <ProjectPeakSynth />
            <ProjectCharMotion />
            <ProjectCoeqwal />
            <ProjectWAOT />
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl">WORK EXPERIENCE</p>
            <ExperienceFreebites />
            <div className="grid lg:grid-cols-2 lg:flex-row gap-8">
              <ExperienceTA />
              <ExperienceJumboCode />
              <ExperienceIDTech />
              <ExperienceThriftway />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center gap-8">
            <p className="text-4xl">RESEARCH EXPERIENCE</p>
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
