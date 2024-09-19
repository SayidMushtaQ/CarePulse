import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    pincode: {
      type: String,
      required: true
    },
    allDoctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
      }
    ],
    address1: {
      type: String,
      required: true
    },
    address2: String,
    specializedIn: [String]
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
