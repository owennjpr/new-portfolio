import LinkButton from "../LinkButton";
import TypescriptLogo from "../logos/TypescriptLogo";
import Postgres from "../logos/PostgresLogo";
import NodeJSLogo from "../logos/NodeJSLogo";
import GitHubLogo from "../logos/GithubLogo";
import ReactLogo from "../logos/ReactLogo";
import VercelLogo from "../logos/VercelLogo";
import NextJSLogo from "../logos/NextJSLogo";
import TailwindLogo from "../logos/TailwindLogo";

function ExperienceJumboCode() {
  return (
    <div className="glassBorder p-4">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl">JumboCode</h2>
            <p className="text-lg">Full-Stack Developer</p>
            <p className="">(09/2024 - 05/2025)</p>
          </div>
          <p className="text-sm sm:text-base text-center sm:text-start">
            Worked on a 14 person team to develop an internal web app platform
            for English at Large, a nonprofit supporting immigrants in building
            English language skills. Created a site for administrators and
            tutors to manage the organization's inventory of books and other
            student resources. Collaboratively worked to complete tickets for
            bi-weekly sprints, adding new content and features to the site.
          </p>
          <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
            <p className="text-xl">Technologies:</p>
            <ReactLogo s={32} />
            <NextJSLogo s={32} />
            <TailwindLogo s={32} />
            <TypescriptLogo s={32} />
            <NodeJSLogo s={32} />
            <Postgres s={32} />
            <VercelLogo s={32} />
            <GitHubLogo s={32} />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
          <LinkButton link="https://jumbocode.org/" text="JumboCode" />
          <LinkButton
            link="https://www.englishatlarge.org/"
            text="English At Large"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceJumboCode;
