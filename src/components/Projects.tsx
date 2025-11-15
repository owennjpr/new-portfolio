import ProjectCharMotion from "./projects/ProjectCharMotion";
import ProjectCoeqwal from "./projects/ProjectCoeqwal";
import ProjectFormerlyMe from "./projects/ProjectFormerlyMe";
import ProjectPeakSynth from "./projects/ProjectPeakSynth";
import ProjectWAOT from "./projects/ProjectWAOT";

function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <p className="text-4xl pt-16" id="projects">
        PROJECTS
      </p>
      <ProjectCharMotion />
      <ProjectCoeqwal />
      <ProjectFormerlyMe />
      <ProjectPeakSynth />
      <ProjectWAOT />
    </div>
  );
}

export default Projects;
