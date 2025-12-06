import { Txt } from "@char-motion/react";
import Link from "./icons/Link";

interface LinkButtonProps {
  link: string;
  text: string;
}

function LinkButton(props: LinkButtonProps) {
  const { link, text } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-row justify-between items-center gap-2 p-2 rounded-lg border border-black hover:border-[#0000] hover:text-white hover:bg-[#0008] transition-all"
    >
      {text ? (
        <Txt
          hover={{
            type: "typed sweep",
            options: { cursor: ">", rate: 35, idleRate: 300 },
          }}
          className="w-full text-sm sm:text-base"
        >
          {text + " "}
        </Txt>
      ) : null}
      <Link />
    </a>
  );
}

export default LinkButton;
{
  /* <style>
  a {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(170, 205, 173);
    padding: 0.5rem;
    border-radius: 0.5rem;
    gap: 0.5rem;
    border: solid rgb(170, 205, 173) 2px;
    transition: background-color 0.25s ease;
  }

  a:hover {
    background-color: #e8e8e8;
    color: rgb(120, 155, 123);
  }
  p {
    color: black;
  }

  p:hover {
    color: rgb(120, 155, 123);
  }
</style> */
}
