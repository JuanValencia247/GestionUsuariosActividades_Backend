const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const WeekSummarySchema = Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 🔥 Referencia al usuario
  startDate: { type: String, required: true }, 
  endDate: { type: String, required: true },
  totalPercentage: { type: Number, required: true },
  dailyPercentages: [
    {
      date: { type: String, required: true },
      percentage: { type: Number, required: true },
    }
  ],
}, { timestamps: true });

module.exports = model('WeekSummary', WeekSummarySchema, 'weekSummarys');