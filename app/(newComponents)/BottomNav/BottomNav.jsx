import Link from "next/link";
import Button from "../Button/Button";

export default function BottomNav({ links }) {
  return (
    <>
      <nav className=" px-4 py-2 flex gap-3 fixed bottom-1 left-[50%] translate-x-[-50%] w-full justify-center bg-zinc-700">
        {links.map((l) => (
          <Link href={l.link} key={l.link}>
            <Button text={l.text} color="green" />
          </Link>
        ))}
      </nav>
    </>
  );
}
