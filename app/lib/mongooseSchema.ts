import { Timestamp } from "mongodb";
import mongoose from "mongoose";

mongoose.connect(process.env.URI);
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    musicName: { type: String, required: true },
    musicFile: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    user: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);
export const model =
  mongoose.models.musicData || mongoose.model("musicData", mySchema);
