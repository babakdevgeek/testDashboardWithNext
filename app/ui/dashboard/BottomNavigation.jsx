"use client";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import Chalet from "@mui/icons-material/Chalet";
import Diversity1 from "@mui/icons-material/Diversity1";
import Music from "@mui/icons-material/MusicNote";
import Link from "next/link";
import { useRouter } from "next/navigation";
function BottomNavigationComponent() {
  const router = useRouter();
  const [value, setValue] = React.useState("home");
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    if (newValue === "users") {
      router.push("/dashboard/users");
    }
    if (newValue === "home") {
      router.push("/dashboard");
    }
    if (newValue === "musics") {
      router.push("/dashboard/music");
    }
  };
  return (
    <BottomNavigation
      sx={{
        width: 400,
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="خانه" value="home" icon={<Chalet />} />

      <BottomNavigationAction label="موزیکها" value="musics" icon={<Music />} />
      <BottomNavigationAction
        label="کاربران"
        value="users"
        icon={<Diversity1 />}
      />
    </BottomNavigation>
  );
}

export default BottomNavigationComponent;
