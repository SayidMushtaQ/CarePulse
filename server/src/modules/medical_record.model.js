import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    patient: {
      type: mongoose.Schema.ObjectId,
      ref: "Patient"
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "Doctor"
    }
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
