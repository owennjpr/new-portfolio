import LinkButton from "../LinkButton";
import UnityLogo from "../logos/UnityLogo";
import CSharpLogo from "../logos/CSharpLogo";
import BlenderLogo from "../logos/BlenderLogo";
import GitHubLogo from "../logos/GithubLogo";

function ExperienceIDEALab() {
  return (
    <div className="glassBorder p-4">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl">The IDEA Lab</h2>
            <p className="text-lg">Researcher</p>
            <p className="">(Feb 2023 - May 2025)</p>
          </div>
          <p className="text-sm sm:text-base text-center sm:text-start">
            Developing software for the Owlhead project in the IDEA Lab at Tufts
            University with the aim of altering perception in Virtual Reality,
            increasing field of view and accelerating head turning rate. As a
            researcher I constructed environments and wrote scripts for virtual
            testing in the Unity Game Engine to record user experience and
            performance in a series of trials.
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
            <p className="text-xl">Technologies:</p>
            <UnityLogo s={32} />
            <CSharpLogo s={32} />
            <BlenderLogo s={32} />
            <GitHubLogo s={32} />
          </div>
          <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
            <LinkButton
              link="https://sites.tufts.edu/idea/"
              text="The IDEA Lab"
            />
            <LinkButton
              link="https://sites.tufts.edu/idea/owl-head/"
              text="Owlhead"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceIDEALab;
