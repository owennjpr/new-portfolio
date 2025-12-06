import ExpandableImage from "../ExpandableImage";
import LinkButton from "../LinkButton";

function ColorCoding() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl">The Color Coding Trilogy</h2>
        <p className="text-lg">Album Series</p>
        <p className="">(2023 - 2025)</p>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ccv1.png"
          altStyles="w-72 md:w-60 h-72 md:h-60 md:mb-4"
        />
        <p className="text-sm sm:text-base text-center sm:text-start">
          An open source character-based text animation library published
          through NPM. Uses character by character string manipulation
          techniques in a declarative component that can be dragged and dropped
          into any React stack. It includes a collection of enter, hover, and
          morph effects targeting flexible use cases to make websites feel more
          alive with a retro ASCII flair. All of the text animations you've seen
          here on this website are powered by this library.
        </p>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ccv2.png"
          altStyles="w-72 md:w-60 h-72 md:h-60 md:mb-4"
        />

        <p className="text-sm sm:text-base text-center sm:text-start">
          An open source character-based text animation library published
          through NPM. Uses character by character string manipulation
          techniques in a declarative component that can be dragged and dropped
          into any React stack. It includes a collection of enter, hover, and
          morph effects targeting flexible use cases to make websites feel more
          alive with a retro ASCII flair. All of the text animations you've seen
          here on this website are powered by this library.
        </p>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ccv3.jpeg"
          altStyles="w-72 md:w-60 h-72 md:h-60"
        />
        <p className="text-sm sm:text-base text-center sm:text-start">
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
          link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-1"
          text="Vol. 1"
        />
        <LinkButton
          link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-2"
          text="Vol. 2"
        />
        <LinkButton
          link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-3"
          text="Vol.3"
        />
      </div>
    </div>
  );
}

export default ColorCoding;
