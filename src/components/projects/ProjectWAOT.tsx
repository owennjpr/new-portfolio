import TypescriptLogo from "../logos/TypescriptLogo";
import ReactLogo from "../logos/ReactLogo";
import VercelLogo from "../logos/VercelLogo";
import NextJSLogo from "../logos/NextJSLogo";
import LinkButton from "../LinkButton";
import TailwindLogo from "../logos/TailwindLogo";
import ImageButton from "../ImageButton";

function ProjectWAOT() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          Who's Afraid of Tailwind?
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <ReactLogo s={32} />
          <TypescriptLogo s={32} />
          <TailwindLogo s={32} />
          <NextJSLogo s={32} />
          <VercelLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        A project I built for the Tufts JumboHack 2025 Hackathon along with four
        other developers and a designer. We wanted to make a web development
        teaching tool dedicated to learning Tailwind, since we had all felt that
        there were not too many resources for this when we were trying to first
        learn the framework. <br />
        <br />
        With our name inspired by Barnett Newman's famous abstract painting
        series
        <a
          className="text-emerald-600"
          href="https://en.wikipedia.org/wiki/Who%27s_Afraid_of_Red,_Yellow_and_Blue"
        >
          "Who's Afraid of Red, Yellow, And Blue"
        </a>
        , we wanted to create a set of educational Tailwind challenges centered
        around recreating famous abstract artworks, each teaching the user about
        how to invoke key CSS properties like flexbox, grid, and border radius
        in Tailwind. The website uses a live code editor for the user to get
        instant visual feedback on their work and an image difference checker
        for seeing how well they were able to match the original paintings.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://whos-afraid-tailwind.vercel.app/"
          text="Who's Afraid of Tailwind?"
        />
        <LinkButton
          link="https://github.com/asendlakowski/whos-afraid-tailwind"
          text="Git Repository"
        />
        <ImageButton
          paths={["waot_home.png", "waot_mondrian.png", "waot_swan.png"]}
        />
      </div>
    </div>
  );
}

export default ProjectWAOT;
