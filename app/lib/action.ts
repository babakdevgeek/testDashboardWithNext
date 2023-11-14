"use server";
import { model } from "./mongooseSchema";
let added = false;
export async function action(formdata: any) {
  const file = formdata.get("musicFile");
  const form = {
    musicFile: file.name,
    musicname: formdata.get("musicName"),
    artist: formdata.get("artist"),
    genre: formdata.get("genre"),
  };
  const music = new model({
    ...form,
  });
  const x = await music.save();
  if (x) {
    added = true;
  }
  return added;
}
