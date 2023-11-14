"use client";
import { action } from "../../../lib/action";
import { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import File from "./file";
export default function AddForm() {
  const [formdata, setFormData] = useState({});
  const [selector, setSelector] = useState("");
  const handleChange = (e) => {
    setSelector(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const inputStyle = "p-1 rounded-sm text-zinc-900";

  return (
    <div className="m-8 text-center">
      <Typography variant="h5" marginBottom={2}>
        فرم افزودن موزیک
      </Typography>
      <form action={action} className="flex flex-col gap-4 max-w-lg m-auto">
        <TextField
          label="نام موزیک..."
          variant="outlined"
          id="musicName"
          name="musicName"
        />

        <TextField
          type="text"
          id="artist"
          name="artist"
          variant="outlined"
          label="نام خواننده..."
        />
        <File />
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">ژانر</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="rap"
            name="genre"
            value={selector}
            onChange={handleChange}
          >
            <MenuItem value={"rap"}>رپ</MenuItem>
            <MenuItem value={"pop"}>پاپ</MenuItem>
            <MenuItem value={"old"}>قدیمی</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" className="self-center">
          افزودن
        </Button>
      </form>
    </div>
  );
}
