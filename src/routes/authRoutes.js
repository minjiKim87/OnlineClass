const express = require("express");
const bcrypt = require("bcryptjs"); // bcryptjs 사용
const User = require("../db/models/User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password, name, studentId, role } = req.body;

    const newUser = new User({
      username,
      password,
      name,
      studentId,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(`Login attempt for username: ${username}`);
    console.log(`Input password: ${password}`);

    const user = await User.findOne({ username });
    if (!user) {
      console.log(`User not found for username: ${username}`);
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match for username: ${username} - ${isMatch}`);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    req.session.userId = user._id;
    console.log("Session ID set for user:", req.session.userId);

    res.status(200).json({
      message: "Login successful",
      user: { username: user.username, role: user.role },
    });
  } catch (error) {
    console.error(`Login error for username: ${username}`, error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

module.exports = router;
