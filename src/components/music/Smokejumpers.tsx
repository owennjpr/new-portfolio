import LinkButton from "../LinkButton";

function Smokejumpers() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl">30 Candles: Smokejumpers</h2>
        <p className="">(2024)</p>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        I created the full soundtrack for "Smokejumpers", part of the "Rolling
        Midnight" live actual play podcast anthology series created by the award
        winning Midnight Ceremonies Media studio. I composed, produced, mixed,
        and mastered the whole soundtrack, performing and recording all of the
        guitar parts for Smokejumpers as well. In addition to the release of the
        show, a soundtrack album was created to highlight all of the composers
        involved, for which I contributed to 15 tracks.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://open.spotify.com/album/2qJwtNjs34ZQpIL0dzr7H4?si=2fJJY_YGR0ihbLxkomXW_g"
          text="Listen to the Soundtrack"
        />
        <LinkButton
          link="https://open.spotify.com/show/4CzUmSPJVq1ekTIabKXQsu?si=d982ac0d672e4ef2"
          text="Rolling Midnight"
        />
        <LinkButton
          link="https://midnightceremoniesmedia.com/"
          text="Midnight Ceremonies Media"
        />
      </div>
    </div>
  );
}

export default Smokejumpers;
