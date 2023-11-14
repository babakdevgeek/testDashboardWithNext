"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { UploadFile } from "@mui/icons-material";

function File() {
  const [filename, setFilename] = useState("فایلی انتخاب نشده است");
  return (
    <Button component="label" variant="contained">
      <UploadFile />
      <input
        type="file"
        hidden
        id="form"
        onChange={(e) => setFilename(e.target.files[0].name)}
      />
      -{filename}
    </Button>
  );
}

export default file;
