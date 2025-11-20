import { Tooltip } from "react-tooltip";
import GithubLogo from "./logos/GithubLogo";
import LinkedInLogo from "./logos/LinkedInLogo";
import { Txt } from "@char-motion/react";

function Socials() {
  return (
    <>
      <div
        className="fixed top-0 right-0 p-2 sm:p-4 flex flex-row gap-2"
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
          borderTop: 0,
          borderRight: 0,
          borderBottomLeftRadius: 16,
          backgroundColor: "#f5efd6",
          zIndex: 30,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <a
          href="https://github.com/owennjpr"
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <GithubLogo s={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/owen-prendergast-351726277/"
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <LinkedInLogo s={24} />
        </a>

        <a
          href="mailto:owenprendergast8@gmail.com"
          className="anchor-mail cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
        </a>
      </div>
      <Tooltip
        anchorSelect=".anchor-mail"
        place="left"
        style={{
          backgroundColor: "rgb(74,72,60",
          borderRadius: 8,
        }}
        className="z-30"
      >
        <Txt
          enter={{
            type: "typed sweep",
            options: { rate: 30 },
          }}
        >
          Email
        </Txt>
      </Tooltip>
    </>
  );
}

export default Socials;
