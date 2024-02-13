const express = require("express");
const router = express.Router();
const Course = require("../db/models/Course");
const Enrollment = require("../db/models/Enrollment");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.json(
      courses.map((course) => ({
        id: course.id,
        title: course.title,
        instructor: course.instructor.name,
        durationWeeks: course.durationWeeks,
        totalTime: course.totalTime,
        description: course.description,
      }))
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});

router.post("/register", async (req, res) => {
  console.log("req.session.userId " + req.session.userId);

  if (req.session.userId) {
    const { courseTitle, durationWeeks, totalTime, description } = req.body;

    try {
      const newCourse = new Course({
        title: courseTitle,
        instructor: req.session.userId,
        durationWeeks,
        totalTime,
        description,
      });

      console.log("가져온 Id " + newCourse.instructor);

      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (error) {
      console.error("Error saving course:", error);
      res.status(500).json({ message: "Failed to save course" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.get("/my", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const courses = await Course.find({ instructor: req.session.userId });
    res.json({ courses });
  } catch (error) {
    console.error("Error fetching user's courses:", error);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});
router.post("/enrollments", async (req, res) => {
  console.log("Enrollment request received");
  if (!req.session.userId) {
    console.log("No session userId found");
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { courseId } = req.body;
  try {
    const newEnrollment = new Enrollment({
      student: req.session.userId,
      course: courseId,
    });

    await newEnrollment.save();
    res.status(201).json({ message: "Enrollment successful" });
  } catch (error) {
    console.error("Error creating enrollment:", error);
    res.status(500).json({ message: "Failed to create enrollment" });
  }
});

module.exports = router;
