import LinkButton from "../LinkButton";

function OtherSoundtracks() {
  return (
    <div className="glassBorder p-4 relative flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4 ">
          <h2 className="text-2xl sm:text-3xl">Other Scoring</h2>
          <p className="">(09/2024 - 06/2025)</p>
        </div>
        <p className="text-sm sm:text-base text-center sm:text-start">
          I have done some other, smaller scale work for video games including
          the battle theme for the in development food themed fighting game
          "cooking fist", and the music for "Shredasaurus" a game about a
          skateboarding velociraptor created for the itch.io "dino jam" game jam
          contest with a top 5 finish.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://bsky.app/profile/cookingfist.bsky.social"
          text="Cooking Fist Bluesky"
        />
        <LinkButton
          link="https://owennjpr.itch.io/shredasaurus"
          text="Shredasaurus"
        />
      </div>
    </div>
  );
}

export default OtherSoundtracks;
