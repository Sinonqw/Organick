import mongoose, { Schema } from "mongoose";

const NewSchema = new Schema(
  {
    author: { type: String, required: true },
    desc: { type: String, required: true },
    title: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

const New = mongoose.models.New || mongoose.model("New", NewSchema);
export default New;
