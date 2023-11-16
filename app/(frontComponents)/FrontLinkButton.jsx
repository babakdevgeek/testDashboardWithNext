import Link from "next/link";

export default function FrontLinkButton({ link, text, style }) {
  return (
    <>
      <Link href={link}>
        <button
          className={
            style == "x"
              ? "rounded-md px-4 py-2 text-sm border-front-purple border-2 shadow-lg hover:bg-front-purple transition"
              : "rounded-md px-4 py-2 text-sm border-front-blue border-2 shadow-lg hover:bg-front-blue transition"
          }
        >
          {text}
        </button>
      </Link>
    </>
  );
}
