"use server";
import fs from "fs";
import path from "path";
import { model } from "./mongooseSchema";
let added = false;
export async function action(formdata) {
  const form = {
    musicFile: formdata.get("musicFile"),
    musicName: formdata.get("musicName"),
    artist: formdata.get("artist"),
    genre: formdata.get("genre"),
  };
  const arrBuffer = await form.musicFile.arrayBuffer();
  const buffer = Buffer.from(arrBuffer);
  const parsedName = path.parse(form.musicFile.name);
  const ext = parsedName.ext;
  const name = parsedName.name;
  const newName =
    name + "-" + Date.now() + Math.floor(Math.random() * 9e3) + ext;
  const p = path.join("./uploads", newName);
  fs.writeFile(p, buffer, (err) => err && console.error(err));
  const newDoc = new model({
    musicName: form.musicName,
    musicFile: newName,
    artist: form.artist,
    genre: form.genre,
  });
  try {
    await newDoc.save();
  } catch (error) {
    return { err: "err in db save" };
  }
  return { success: true };
}
