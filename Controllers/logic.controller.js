import reminderModel from "../Models/reminder.model.js";
import userModel from "../Models/user.Model.js";
import transporter from "../Config/nodemailer.js";

export const set = async (req, res) => {
  const { title, data, time ,remindBY, date} = req.body;

  if (!title || !data || !time || !remindBY || !date) {
    return res.json({
      success: false,
      message: "Fill all the credentials please!",
    });
  }
  try {
    let user = await userModel.findById({ _id: req.body.userID });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    await reminderModel.create({
      title: title,
      data: data,
      time: time,
      date:date,
      remindBY:remindBY,
      userID: req.body.userID,
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Reminder is scheduled",
      text: ``,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Reminder scheduled" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const cancel = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ success: false, message: "ID not found" });
  }
  try {
    let removed = await reminderModel.findByIdAndDelete(id);

    if (removed) {
      return res.json({ success: true, message: "Reminder cancelled" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
