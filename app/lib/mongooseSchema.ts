import { Timestamp } from "mongodb";
import mongoose from "mongoose";

mongoose.connect(process.env.URI);
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    musicNmae: String,
    musicFile: String,
    artist: String,
    genre: String,
    user: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);
export const model = mongoose.models.music || mongoose.model("music", mySchema);
