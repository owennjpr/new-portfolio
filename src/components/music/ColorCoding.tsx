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
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-sm sm:text-base text-center sm:text-start">
            My first project as "formerly.". This album drew greatly from warm
            feelings of nostalgia and happy childhood memories. This was the
            beginning of my exploration of music and color associations through
            the Color Coding series, and established the format for each of
            these albums: 6 songs with a hexidecimal color code in the title to
            connect more specific colors than just blue or green for example.
          </p>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 text-sm/4 sm:text-base/5 ">
            <p>Colors/Songs:</p>
            <p className="bg-[#EAC581]">Warmth</p>
            <p className="bg-[#64A661] text-white">Dreams</p>
            <p className="bg-[#98DAFB]">Wonder</p>
            <p className="bg-[#8F718D] text-white">Magic</p>
            <p className="bg-[#89522D] text-white">Solace</p>
            <p className="bg-[#FFF8E9]">Everything</p>
          </div>
          <LinkButton
            link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-1"
            text="Listen to Vol. 1"
          />
        </div>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ccv2.png"
          altStyles="w-72 md:w-60 h-72 md:h-60 md:mb-4"
        />
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-sm sm:text-base text-center sm:text-start">
            A colder and more reserved album compared to its predecessor, Vol. 2
            explores the way that nostalgia can turn to wistfulness if you lose
            yourself to it. The color palette of this album is also the most
            muted of the 3 Volumes, in contrast to the bright pastels of Vol. 1
            and the saturated colors of Vol. 3.
          </p>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 text-sm/4 sm:text-base/5 ">
            <p>Colors/Songs:</p>
            <p className="bg-[#0C2140] text-white">Distance</p>
            <p className="bg-[#4b4f99] text-white">Stardust</p>
            <p className="bg-[#77BCA0]">Longing</p>
            <p className="bg-[#f5c1db] ">Memory</p>
            <p className="bg-[#96959D] text-white">Absence</p>
            <p className="bg-[#377EA5] text-white">Wishes</p>
          </div>
          <LinkButton
            link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-2"
            text="Listen to Vol. 2"
          />
        </div>
      </div>
      <div className="flex items-center md:items-start flex-col md:flex-row gap-2">
        <ExpandableImage
          path="covers/ccv3.jpeg"
          altStyles="w-72 md:w-60 h-72 md:h-60"
        />
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-sm sm:text-base text-center sm:text-start">
            The final installment in the Color Coding trilogy, and the largest
            range both in terms of color palette and the music itself. The
            sounds and textures move from bright and spacey to dark and
            distorted over the course of the album. It was important to me that
            all 3 installments had their own unique feel, so this album explored
            new sounds that I hadn't covered with the first two Color Coding
            volumes, and is one of my favorites as a result.
          </p>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 text-sm/4 sm:text-base/5 ">
            <p>Colors/Songs:</p>
            <p className="bg-[#D18283]">Reverence</p>
            <p className="bg-[#2449B0] text-white">Infinity</p>
            <p className="bg-[#3C8564] text-white">Tranquility</p>
            <p className="bg-[#BDAED9] ">Belonging</p>
            <p className="bg-[#374134] text-white">Dread</p>
            <p className="bg-[#16161D] text-white">Nothing</p>
          </div>
          <LinkButton
            link="https://distrokid.com/hyperfollow/formerly/color-coding-vol-3"
            text="Listen to Vol.3"
          />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start"></div>
    </div>
  );
}

export default ColorCoding;
