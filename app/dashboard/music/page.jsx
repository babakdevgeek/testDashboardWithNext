import CategoriesList from "./../../ui/dashboard/music/CategoriesList";
import FavMusics from "./../../ui/dashboard/music/FavMusics";
import RecentMusics from "./../../ui/dashboard/music/RecentMusics";
import React from "react";
import LinkButton from "../../(newComponents)/LinkButton/LinkButton";
import { Add } from "@mui/icons-material";
export default function page() {
  return (
    <div className="text-center flex flex-col gap-4">
      <LinkButton text="افزودن دستی موزیک" link="/dashboard/music/add">
        <Add />
      </LinkButton>
      <RecentMusics />
      <FavMusics />
      <CategoriesList />
    </div>
  );
}
