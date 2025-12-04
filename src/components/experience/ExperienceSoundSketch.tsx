// import LinkButton from "../LinkButton";
import UnityLogo from "../logos/UnityLogo";
import CSharpLogo from "../logos/CSharpLogo";
import GitHubLogo from "../logos/GithubLogo";

function ExperienceSoundSketch() {
  return (
    <div className="glassBorder p-4">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl">SoundSketch</h2>
            <p className="text-lg">Researcher</p>
            <p className="">(09/2024 - 05/2025)</p>
          </div>
          <p className="text-sm sm:text-base text-center sm:text-start">
            A small research group dedicated to creating a multitrack spatial
            audio recorder in Virtual Reality, doubling as an experimental
            chromesthesia simulator. This project is overseen by a Tufts
            professor who wanted to recreate the interactive audiovisual
            experience of his synesthesia in a Virtual Reality context. The goal
            is to create something in Unity VR that records head tracking data
            and uses it to recreate the recorder's audio spatialization
            experience for a recipient with a tracked visual component.
          </p>
        </div>
        <div>
          <div className="flex flex-row gap-4 items-center mt-2 flex-wrap">
            <p className="text-xl">Technologies:</p>
            <UnityLogo s={32} />
            <CSharpLogo s={32} />
            <GitHubLogo s={32} />
          </div>
          <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
            {/* <LinkButton
              link="https://sites.tufts.edu/idea/"
              text="The IDEA Lab"
            />
            <LinkButton
              link="https://sites.tufts.edu/idea/owl-head/"
              text="Owlhead"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSoundSketch;
