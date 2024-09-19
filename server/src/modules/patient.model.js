import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true,
      enum: ["MALE", "FEMALE", "OTHER"]
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
    diagonseWith: {
      type: String,
      required: true
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"
    },
    checkedByDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor"
    }
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
