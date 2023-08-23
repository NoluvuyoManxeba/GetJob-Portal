import mongoose, { Schema } from "mongoose";

// Define a job schema using Mongoose's Schema class
const jobSchema = new mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Companies" }, // Reference to the "Companies" model
    jobTitle: { type: String, required: [true, "Job Title is required"] },
    jobType: { type: String, required: [true, "Job Type is required"] },
    location: { type: String, required: [true, "Location is required"] },
    salary: { type: Number, required: [true, "Salary is required"] },
    vacancies: { type: Number },
    experiences: { type: Number, default: 0 }, // Default experience is set to 0
    detail: [
      {
        desc: { type: String }, // Description of the job
        requirements: { type: String }, // Job requirements
      },
    ],
    application: [{ type: Schema.Types.ObjectId, ref: "Users" }], // Reference to the "Users" model
  },
  { timestamps: true } // Adds timestamps for createdAt and updatedAt fields
);

// Create a Mongoose model named "Jobs" based on the jobSchema
const Jobs = mongoose.model("Jobs", jobSchema);

export default Jobs;
