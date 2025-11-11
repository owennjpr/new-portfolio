import TypescriptLogo from "../logos/TypescriptLogo";
import ReactLogo from "../logos/ReactLogo";
import PostgresLogo from "../logos/PostgresLogo";
import LinkButton from "../LinkButton";

function ProjectCoeqwal() {
  return (
    <div className="glassBorder p-4">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          COEQWAL Data Visualization
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <ReactLogo s={32} />
          <TypescriptLogo s={32} />
          <PostgresLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        This project is a collaboration with UC Berkeley's Colaboratory for
        Equity in Water Allocation (COEQWAL) to develop an accessible data
        visualization tool to help the general public better understand water
        allocation challenges in California.
        <br />
        <br />
        California has extensive water infrastructure, however due to its dry
        climate and intermittent rainfall it can be very difficult to
        consistently meet all of the state's water demands. Unfortunately, the
        decision-making process behind these water management choices is not
        very clear to the average person. COEQWAL is attempting to increase
        transparency and awareness around these issues by providing people with
        the data and resources to understand potential water management futures.
        <br />
        <br />
        The website I am creating serves as a companion to the core project,
        providing a simplified visualization of real data that abstracts away
        some of the more confusing elements to provide a "first step" into
        understanding California's many water management challenges. The site is
        still in development with a completed functional prototype in the
        repository below.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://coeqwal-web-game.vercel.app/"
          text="Project"
        />
        <LinkButton
          link="https://live-coeqwal-ca.pantheon.berkeley.edu/"
          text="COEQWAL"
        />
        <LinkButton
          link="https://github.com/owennjpr/COEQWAL-WebGame"
          text="Git Repository"
        />
      </div>
    </div>
  );
}

export default ProjectCoeqwal;
