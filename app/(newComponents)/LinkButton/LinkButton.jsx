import Link from "next/link";
import Button from "../Button/Button";
export default function LinkButton({ link, text, children, color }) {
  return (
    <>
      <Link href={link}>
        <button
          className={
            color === "green"
              ? "rounded-md px-4 py-3 bg-next-green self-center text-xs hover:opacity-90 shadow-next-shadow"
              : "rounded-md px-4 py-3 bg-next-orange self-center text-xs hover:opacity-90 shadow-next-shadow"
          }
        >
          {text}
          {children}
        </button>
      </Link>
    </>
  );
}
