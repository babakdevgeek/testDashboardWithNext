import Link from "next/link";

export default function ActionButton({ text, children, style, link }) {
  return (
    <>
      <Link href={link}>
        <button
          className={
            style === "fill"
              ? "rounded-md px-4 py-2 text-sm shadow-md w-full text-center bg-front-action text-next-deep-black hover:opacity-90"
              : ""
          }
        >
          {text}
          {children}
        </button>
      </Link>
    </>
  );
}
