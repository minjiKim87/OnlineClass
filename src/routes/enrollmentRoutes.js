const express = require("express");
const router = express.Router();
const Course = require("../db/models/Course");
const Enrollment = require("../db/models/Enrollment");

router.get("/student/enrolled-courses", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const enrollments = await Enrollment.find({
      student: req.session.userId,
    }).populate("course");
    const courses = enrollments.map((enrollment) => enrollment.course);
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
