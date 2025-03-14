const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Phone", // Fixed reference (case-sensitive)
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
