import LinkButton from "../LinkButton";

function OtherWorks() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl">Prior Works</h2>
        <p className="">(2018 - 2021)</p>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        Before creating formerly. I had released music under other names
        including False Omen, which holds my most substantial body of older
        work. While I am more proud of my current work, this was an important
        part of my musical journey (particularly the album "The Lost Worlds")
        and deserves highlighting.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://distrokid.com/hyperfollow/falseomen/the-lost-worlds"
          text="Listen to The Lost Worlds"
        />

        <LinkButton link="https://soundcloud.com/falseomen" text="SoundCloud" />
      </div>
    </div>
  );
}

export default OtherWorks;
