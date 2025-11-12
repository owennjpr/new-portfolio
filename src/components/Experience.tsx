import ExperienceFreebites from "./experience/ExperienceFreebites";
import ExperienceIDTech from "./experience/ExperienceIDTech";
import ExperienceJumboCode from "./experience/ExperienceJumboCode";
import ExperienceTA from "./experience/ExperienceTA";
import ExperienceThriftway from "./experience/ExperienceThriftway";

function Experience() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <ExperienceFreebites />
      <ExperienceTA />
      <ExperienceJumboCode />
      <div className="flex flex-col lg:flex-row gap-8">
        <ExperienceIDTech />
        <ExperienceThriftway />
      </div>
    </div>
  );
}

export default Experience;
