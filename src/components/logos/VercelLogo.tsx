import { Tooltip } from "react-tooltip";

function Logo({ s }: { s: number }) {
  return (
    <>
      <a href="https://vercel.com" className="anchor-vercel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={s}
          height={s}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path fill="#000" d="m12 1 12 21H0L12 1Z"></path>
        </svg>
      </a>
      <Tooltip
        anchorSelect=".anchor-vercel"
        place="top"
        style={{
          backgroundColor: "rgb(74,72,60",
          borderRadius: 8,
        }}
      >
        Vercel
      </Tooltip>
    </>
  );
}

export default Logo;
