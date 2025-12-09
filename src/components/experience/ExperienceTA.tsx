import LinkButton from "../LinkButton";

function ExperienceTA() {
  return (
    <div className="glassBorder p-4">
      <div className="blockText">
        <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl">Tufts CS105</h2>
          <p className="text-lg">Course Assistant</p>
          <p className="">(09/2024 - 06/2025)</p>
        </div>
        <p className="text-sm sm:text-base text-center sm:text-start">
          Worked as a course assistant for Tufts University's CS105 Programming
          Languages Course. This course focused on understanding high level
          coding concepts like functional programming vs OOP, static vs dynamic
          type systems, and operational semantics. I led in person recitation
          sessions, facilitated office hours for students and graded
          asisgnments, providing feedback on their work and coding practices.
        </p>
        <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
          <p className="text-xl">
            Technologies: µScheme, Moscow ML, Standard ML, Smalltalk
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
          <LinkButton
            link="https://www.cs.tufts.edu/comp/105/"
            text="CS105 Course Site"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceTA;
