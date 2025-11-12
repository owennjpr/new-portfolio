import TypescriptLogo from "../logos/TypescriptLogo";
import LinkButton from "../LinkButton";
import NodeJSLogo from "../logos/NodeJSLogo";
import ReactLogo from "../logos/ReactLogo";
import VercelLogo from "../logos/VercelLogo";
import NextJSLogo from "../logos/NextJSLogo";

function ProjectCharMotion() {
  return (
    <div className="glassBorder p-4">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          Char Motion
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <ReactLogo s={32} />
          <TypescriptLogo s={32} />
          <NodeJSLogo s={32} />
          <NextJSLogo s={32} />
          <VercelLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        An open source character-based text animation library published through
        NPM. Uses character by character string manipulation techniques in a
        declarative component that can be dragged and dropped into any React
        stack. It includes a collection of enter, hover, and morph effects
        targeting flexible use cases to make websites feel more alive with a
        retro ASCII flair. All of the text animations you've seen here on this
        website are powered by this library.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://char-motion.vercel.app/"
          text="Website & Docs"
        />
        <LinkButton
          link="https://www.npmjs.com/package/@char-motion/react/"
          text="NPM"
        />
        <LinkButton
          link="https://github.com/owennjpr/char-motion"
          text="Git Repository"
        />
      </div>
    </div>
  );
}

export default ProjectCharMotion;
