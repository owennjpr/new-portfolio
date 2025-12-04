import ExperienceFreebites from "./experience/ExperienceFreebites";
import ExperienceIDEALab from "./experience/ExperienceIDEALab";
import ExperienceIDTech from "./experience/ExperienceIDTech";
import ExperienceJumboCode from "./experience/ExperienceJumboCode";
import ExperienceTA from "./experience/ExperienceTA";
import ExperienceThriftway from "./experience/ExperienceThriftway";

function Experience() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <p className="text-4xl">EXPERIENCE</p>
      <ExperienceFreebites />
      <ExperienceTA />
      <div className="grid lg:grid-cols-2 lg:flex-row gap-8">
        <ExperienceJumboCode />
        <ExperienceIDEALab />
        {/* <ExperienceSoundSketch /> */}
        <ExperienceIDTech />
        <ExperienceThriftway />
      </div>
    </div>
  );
}

export default Experience;
