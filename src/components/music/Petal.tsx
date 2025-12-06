import LinkButton from "../LinkButton";
// import ImageButton from "../ImageButton";
import ExpandableImage from "../ExpandableImage";

function Petal() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center md:flex-row md:items-baseline gap-1 md:gap-4">
        <h2 className="text-2xl md:text-3xl">Petal</h2>
        <p className="text-lg">Album</p>
        <p className="">(2024)</p>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ptl.jpeg"
          altStyles="w-72 md:w-60 h-72 md:h-60"
        />

        <p className="text-sm md:text-base text-center md:text-start">
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
          link="https://distrokid.com/hyperfollow/formerly/petal"
          text="Streaming Links"
        />
        {/* <ImageButton
          paths={["char_home.png", "char_docs.png", "char_gallery.png"]}
        /> */}
      </div>
    </div>
  );
}

export default Petal;
