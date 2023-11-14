import BottomNavigationComponent from "../ui/dashboard/BottomNavigation";
import Dashboard from "@mui/icons-material/Dashboard";
import { Typography } from "@mui/material";
export default function layout({ children }) {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Typography
        variant="body"
        boxShadow={3}
        className="px-2 bg-indigo-800 inline-block rounded-bl-xl px-4 py-2 text-white"
        style={{ textShadow: "1px 1px 4px #fff" }}
      >
        <Dashboard /> داشبورد
      </Typography>
      <div className="m-8">{children}</div>
      <BottomNavigationComponent />
    </div>
  );
}
