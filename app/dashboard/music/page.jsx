import CategoriesList from "./../../ui/dashboard/music/CategoriesList";
import FavMusics from "./../../ui/dashboard/music/FavMusics";
import RecentMusics from "./../../ui/dashboard/music/RecentMusics";
import React from "react";
import { Add } from "@mui/icons-material/Add";
import LinkButton from "../../ui/dashboard/music/LinkButton";

export default function page() {
  return (
    <div className="text-center flex flex-col gap-4">
      <LinkButton
        text="افزودن موزیک"
        link={"/dashboard/music/add"}
      ></LinkButton>
      <RecentMusics />
      <FavMusics />
      <CategoriesList />
    </div>
  );
}
