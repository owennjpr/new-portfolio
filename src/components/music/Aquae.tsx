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
          An open source character-based text animation library published
          through NPM. Uses character by character string manipulation
          techniques in a declarative component that can be dragged and dropped
          into any React stack. It includes a collection of enter, hover, and
          morph effects targeting flexible use cases to make websites feel more
          alive with a retro ASCII flair. All of the text animations you've seen
          here on this website are powered by this library.
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
