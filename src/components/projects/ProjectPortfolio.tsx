import TypescriptLogo from "../logos/TypescriptLogo";
import ReactLogo from "../logos/ReactLogo";
import ViteLogo from "../logos/ViteLogo";
import VercelLogo from "../logos/VercelLogo";
import NodeLogo from "../logos/NodeJSLogo";
import PixiLogo from "../logos/PixiLogo";
import TailwindLogo from "../logos/TailwindLogo";

function ProjectPortfolio() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          This Website!
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <ReactLogo s={32} />
          <TypescriptLogo s={32} />
          <TailwindLogo s={32} />
          <PixiLogo s={32} />
          <ViteLogo s={32} />
          <NodeLogo s={32} />
          <VercelLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        I wanted my portfolio site to highlight my creative coding interests, so
        I decided to create an algorithmically generated art piece for the
        background. I have always loved the idea of procedurally generating
        plants through code, and during one of my courses at Tufts we learned
        about{" "}
        <a
          className="text-emerald-600"
          href="https://en.wikipedia.org/wiki/L-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          L-systems
        </a>
        . When randomization is incorporated into the grammar of an L-system, it
        can be used to generate unique plantlike structures. I translated this
        logic into TypeScript, using Pixi.js to render the objects and
        incorportating texture caching to allow hundreds of plants to draw
        smoothly in the browser simultaneously.
      </p>
    </div>
  );
}

export default ProjectPortfolio;
