import Link from "next/link";
import Dashboard from "@mui/icons-material/Dashboard";
import BottomNav from "./../(newComponents)/BottomNav/BottomNav";
export default function layout({ children }) {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Link href={"/dashboard"}>
        <h3
          className=" bg-indigo-800 inline-block rounded-bl-xl px-4 py-2 text-white shadow-next-shadow"
          style={{ textShadow: "1px 1px 4px #fff" }}
        >
          <Dashboard /> داشبورد
        </h3>
      </Link>
      <div className="m-8">{children}</div>
      <BottomNav
        links={[
          { link: "/dashboard", text: "خانه" },
          { link: "/dashboard/music", text: "موزیک" },
          { link: "/dashboard/users", text: "کاربران" },
        ]}
      />
    </div>
  );
}
