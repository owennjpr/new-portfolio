import LinkButton from "../LinkButton";
import PythonLogo from "../logos/PythonLogo";

function ExperienceIDTech() {
  return (
    <div className="glassBorder p-4">
      <div className="blockText">
        <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl">iD Tech</h2>
          <p className="text-lg">Instructor</p>
          <p className="">(Jun 2024 - Aug 2024)</p>
        </div>
        <p className="text-sm sm:text-base text-center sm:text-start">
          I led and managed summer classes in Python, robotics, and more at the
          University of Washington. I spent time working with elementary to high
          school aged students and developed engaging lessons for diverse
          learning styles.
        </p>
        <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
          <p className="text-xl">Technologies:</p>
          <PythonLogo s={32} />
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
          <LinkButton link="https://www.idtech.com/" text="iD Tech" />
        </div>
      </div>
    </div>
  );
}

export default ExperienceIDTech;
