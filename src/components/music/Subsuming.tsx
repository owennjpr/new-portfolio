import ExpandableImage from "../ExpandableImage";
import LinkButton from "../LinkButton";

function Subsuming() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center xl:flex-row xl:items-baseline gap-1 xl:gap-4">
        <h2 className="text-2xl xl:text-3xl">Subsuming</h2>
        <p className="text-lg">Single</p>
        <p className="">(2024)</p>
      </div>
      <div className="flex items-center xl:items-start flex-col xl:flex-row gap-2">
        <ExpandableImage
          path="covers/sub.jpg"
          altStyles="w-72 xl:w-52 h-72 xl:h-52"
        />

        <p className="text-sm xl:text-base text-center xl:text-start">
          With Subsuming I wanted to create a song that made you feel like you
          were being enveloped by the natural world. It was a bit of a shift
          from my established style following Petal, very texturally detailed
          and the first formerly. song to incorporate guitar which I played and
          recorded.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://distrokid.com/hyperfollow/formerly/subsuming"
          text="Streaming Link"
        />
      </div>
    </div>
  );
}

export default Subsuming;
