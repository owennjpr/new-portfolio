import LinkButton from "../LinkButton";

function StandingBy() {
  return (
    <div className="glassBorder p-4 relative flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl">Standing By</h2>
          <p className="">(2021)</p>
        </div>
        <p className="text-sm sm:text-base text-center sm:text-start">
          I composed, produced, mixed, and mastered a full 18 track soundtrack
          for Casey Fleming's 3 episode audio drama miniseries following a group
          of teenage superheroes' discovery of a misplaced macguffin.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://open.spotify.com/show/4VpcvzsGvObWROp0HibwC0?si=65033499763a47f5"
          text="Listen to Standing By"
        />
        <LinkButton
          link="https://www.imdb.com/title/tt15315344/?ref_=nm_knf_t_1"
          text="IMDB"
        />
      </div>
    </div>
  );
}

export default StandingBy;
