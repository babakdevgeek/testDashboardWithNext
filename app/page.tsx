import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-center mt-6">موزیک اوشن پلتفرم اشتراک ودانلود موزیک</p>
      <Link
        href={"/dashboard"}
        className="border-2 p-2 text-center border-purple-600  rounded-sm"
      >
        برو به داشبورد
      </Link>
    </div>
  );
}
