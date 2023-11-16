import FrontLinkButton from "../(frontComponents)/FrontLinkButton";
import ActionButton from "../(frontComponents)/ActionButton";
export default function Navbar() {
  return (
    <>
      <header className="p-4 text-center">
        <h1 className="mb-4">موزیک اوشن پلتفرم اشتراک ودانلود موزیک</h1>
        <nav className="flex gap-2 justify-center items-center">
          <FrontLinkButton text={"ثبت نام"} link={"/signup"} style={"x"} />
          <FrontLinkButton text={"ورود"} link={"/login"} />
          <ActionButton
            text={"افزودن موزیک به سایت"}
            style={"fill"}
            link={"/add-your-music"}
          />
        </nav>
      </header>
    </>
  );
}
