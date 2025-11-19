import CppLogo from "../logos/CppLogo.";
import LinkButton from "../LinkButton";
import { Tooltip } from "react-tooltip";
import ImageButton from "../ImageButton";

function ProjectPeakSynth() {
  return (
    <div className="glassBorder p-4 relative">
      <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-4">
        <h2 className="text-xl sm:text-3xl text-center sm:text-left w-full sm:w-auto">
          PeakSynth
        </h2>
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto">
          <>
            <a href="https://juce.com/made-with-juce/" className="anchor-juce">
              <img src="/JUCE_Logo.png" width="36" />
            </a>
            <Tooltip
              anchorSelect=".anchor-juce"
              place="top"
              style={{
                backgroundColor: "rgb(74,72,60",
                borderRadius: 8,
              }}
            >
              JUCE
            </Tooltip>
          </>
          <CppLogo s={32} />
        </div>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">
        PeakSynth is an open source audio plugin I built using C++ and the JUCE
        framework, capable of interfacing with any Digital Audio Workstation
        software. The plugin takes ambient noise and live MIDI input, melding
        them into a harmonic mix of tonal and textural sounds. You can find a
        longer description with some audio demos at the repository linked below.
      </p>
      <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
        <LinkButton
          link="https://github.com/owennjpr/PeakSynth-Audio-Plugin"
          text="Git Repository & Download"
        />
        <ImageButton paths={["peaksynth.png"]} />
      </div>
    </div>
  );
}

export default ProjectPeakSynth;
