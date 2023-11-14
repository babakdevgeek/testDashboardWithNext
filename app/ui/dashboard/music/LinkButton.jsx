"use client";
import { Button, Link } from "@mui/material";
import React from "react";
function LinkButton({ link, text }) {
  return (
    <>
      <Button variant="contained" href={link} sx={{ alignSelf: "center" }}>
        {text}
      </Button>
    </>
  );
}

export default LinkButton;
