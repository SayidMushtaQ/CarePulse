import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    qulification: {
      type: String,
      required: true
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
      }
    ]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
