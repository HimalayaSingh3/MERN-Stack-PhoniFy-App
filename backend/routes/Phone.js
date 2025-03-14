const express = require("express");
const Phone = require("../models/Phone");
const User = require("../models/User");
const authMiddleware = require("../middleware/Auth");

const router = express.Router();

// Get No
router.get("/get-no", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    const userId = user.id;

    // Ensure the user exists
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch phone numbers linked to this user
    const numbers = await Phone.find({ userId });

    return res.status(200).json({ message: "Numbers fetched successfully", numbers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


// Add number
router.post("/add-no", authMiddleware, async (req, res) => {
  try {
    const { name, number } = req.body;
    if (!name || !number) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { user } = req;
    const userId = user.id;

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const newNum = new Phone({ name, number, userId });
    await newNum.save();

    return res.status(201).json({ message: "Number added successfully", newNum });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete number
router.delete("/delete-no/:id", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    const userId = user.id;
    const { id } = req.params; // Get the number ID from URL params

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const number = await Phone.findOneAndDelete({ _id: id, userId });
    if (!number) {
      return res.status(404).json({ message: "Number not found" });
    }

    return res.status(200).json({ message: "Number deleted successfully", number });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
