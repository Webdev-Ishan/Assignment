import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  data: {
    type: String,
    trim: true,
  },
   date: {
    type: String, // Format: "YYYY-MM-DD"
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/ // basic format validation
  },
  time: {
    type: String, // Format: "HH:MM"
    required: true,
    match: /^([01]\d|2[0-3]):([0-5]\d)$/ // 24-hour time format validation
  },
  remindBY: {
    type: String,
    enum:["SMS","email"],
    default:"email",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const reminderModel = mongoose.model("Reminder", reminderSchema);

export default reminderModel;
