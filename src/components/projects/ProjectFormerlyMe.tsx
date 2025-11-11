import TypescriptLogo from "../logos/TypescriptLogo";
import ReactLogo from "../logos/ReactLogo";
import VercelLogo from "../logos/VercelLogo";
import NextJSLogo from "../logos/NextJSLogo";
import NodeJSLogo from "../logos/NodeJSLogo";
import LinkButton from "../LinkButton";

function ProjectFormerlyMe() {
  return (
    <div className="glassBorder p-4">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          formerly.me
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <ReactLogo s={32} />
          <TypescriptLogo s={32} />
          <NextJSLogo s={32} />
          <NodeJSLogo s={32} />
          <VercelLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        In addition to programming, one of the things I am most passionate about
        is music. I create and release my own ambient electronic music, and I
        wanted to have a website where I could archive everything I've created,
        and a platform for some web based audio experiences. With this goal, I
        created formerly.me, a living website that is constantly expanding with
        new features and sub-projects.
        <br />
        <br />
        The site contains a mix of interactive ways to learn more about my
        released music, as well as several endlessly generating algorithmic
        music compositions like "Macrobiome" and "Tone Garden" built with
        TypeScript and the Web Audio API.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton link="https://formerly.me" text="formerly.me" />
      </div>
    </div>
  );
}

export default ProjectFormerlyMe;
