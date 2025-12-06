import LinkButton from "../LinkButton";
import ImageButton from "../ImageButton";

function OtherWorks() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl">Other Works</h2>
        <p className="">(2018 - 2021)</p>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        An open source character-based text animation library published through
        NPM. Uses character by character string manipulation techniques in a
        declarative component that can be dragged and dropped into any React
        stack. It includes a collection of enter, hover, and morph effects
        targeting flexible use cases to make websites feel more alive with a
        retro ASCII flair. All of the text animations you've seen here on this
        website are powered by this library.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://char-motion.vercel.app/"
          text="Website & Docs"
        />
        <LinkButton
          link="https://www.npmjs.com/package/@char-motion/react/"
          text="NPM"
        />
        <LinkButton
          link="https://github.com/owennjpr/char-motion"
          text="Git Repository"
        />
        <ImageButton
          paths={["char_home.png", "char_docs.png", "char_gallery.png"]}
        />
      </div>
    </div>
  );
}

export default OtherWorks;
