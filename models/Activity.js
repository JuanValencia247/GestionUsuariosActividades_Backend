const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ActivitySchema = Schema({
  userId: { type: Schema.ObjectId, ref: "User" },
  date: String, // formato: YYYY-MM-DD
  description: String,
  percentage: Number,
});

module.exports = model("Activity", ActivitySchema, "activities");
