import LinkButton from "../LinkButton";
import TypescriptLogo from "../logos/TypescriptLogo";
import ReactNativeLogo from "../logos/ReactNative";
import NodeJSLogo from "../logos/NodeJSLogo";
import ExpoLogo from "../logos/ExpoLogo";
import TailwindLogo from "../logos/TailwindLogo";
import FirebaseLogo from "../logos/FirebaseLogo";
import CloudflareLogo from "../logos/CloudflareLogo";
import MongodbLogo from "../logos/MongoLogo";
import GitHubLogo from "../logos/GithubLogo";
import ReactLogo from "../logos/ReactLogo";
import VercelLogo from "../logos/VercelLogo";
import NextJSLogo from "../logos/NextJSLogo";
import PixiLogo from "../logos/PixiLogo";

function ExperienceFreebites() {
  return (
    <div className="glassBorder p-4">
      <div className="blockText">
        <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl">FreeBites</h2>
          <p className="text-lg">Full-Stack Developer</p>
          <p className="">(05/2024 - Present)</p>
        </div>
        <p className="text-sm sm:text-base text-center sm:text-start">
          FreeBites is a student-founded company created by Tufts University
          students and alumni. We developed the FreeBites mobile app using React
          Native, Expo, and TypeScript to help people discover and post free
          food, combating food insecurity and waste. I joined the team several
          months before launch to help prepare for release, delivering
          consistent new features and fixes such as post deletion and report
          flows, integrated popup systems, and more. Since launch, I've
          continued to contribute across the stack, working on new app features,
          DevOps, and the company's web landing page.
        </p>
        <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
          <p className="text-xl">Technologies:</p>
          <ReactNativeLogo s={32} />
          <ExpoLogo s={32} />
          <TailwindLogo s={32} />
          <TypescriptLogo s={32} />
          <NodeJSLogo s={32} />
          <FirebaseLogo s={32} />
          <MongodbLogo s={32} />
          <CloudflareLogo s={32} />
          <GitHubLogo s={32} />
          <ReactLogo s={32} />
          <PixiLogo s={32} />
          <NextJSLogo s={32} />
          <VercelLogo s={32} />
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
          <LinkButton
            link="https://www.freebites.org/"
            text="FreeBites Website"
          />
          <LinkButton
            link="https://apps.apple.com/us/app/freebites/id6664051907"
            text="App Store"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceFreebites;
