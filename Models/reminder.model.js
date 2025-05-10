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
  time: {
    type: Date, 
    required: true,
    trim: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
});

const reminderModel = mongoose.model("Reminder", reminderSchema);

export default reminderModel;
