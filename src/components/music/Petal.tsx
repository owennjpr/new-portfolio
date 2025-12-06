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
        <div className="flex flex-row flex-wrap gap-2 sm:gap-4 text-sm/4 sm:text-base/5 ">
          <p className="text-sm md:text-base text-center md:text-start">
            Petal was my most ambitious project, constructed as a narrative
            album, intertwining a story with the music every step of the way.
            This story centers around a 'gardener' of the afterlife, who has the
            responsibility of deciding which souls are allowed to take root, and
            which will be pruned from the garden. Over the course of their
            lifetime their perspective on this responsibility shifts and they
            make their own way forward. Musically I wanted to create something
            that felt organic, soft, and untethered, both in terms of
            composition and production techniques.
          </p>
          <LinkButton
            link="https://distrokid.com/hyperfollow/formerly/petal"
            text="Streaming Links"
          />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        {/* <ImageButton
          paths={["char_home.png", "char_docs.png", "char_gallery.png"]}
        /> */}
      </div>
    </div>
  );
}

export default Petal;
