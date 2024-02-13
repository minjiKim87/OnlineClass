const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  durationWeeks: { type: Number, required: true },
  totalTime: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Course", courseSchema);
