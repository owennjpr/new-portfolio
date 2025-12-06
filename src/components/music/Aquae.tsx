import ExpandableImage from "../ExpandableImage";
import LinkButton from "../LinkButton";

function Aquae() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center xl:flex-row xl:items-baseline gap-1 xl:gap-4">
        <h2 className="text-2xl xl:text-3xl">Aquae</h2>
        <p className="text-lg">Single</p>
        <p className="">(2024)</p>
      </div>
      <div className="flex items-center xl:items-start flex-col xl:flex-row gap-2">
        <ExpandableImage
          path="covers/aqa.jpg"
          altStyles="w-72 xl:w-52 h-72 xl:h-52"
        />

        <p className="text-sm xl:text-base text-center xl:text-start">
          Aquae was a continuation of my experimentation following Petal, and is
          definitely my most uptempo and energetic song. It is also the song I
          took the least amount of time to make, a fun track created in a few
          days that I liked enough to release immediately.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://distrokid.com/hyperfollow/formerly/aquae"
          text="Streaming Link"
        />
      </div>
    </div>
  );
}

export default Aquae;
