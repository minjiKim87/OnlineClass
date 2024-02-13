import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseRegistrationPage = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [instructor, setInstructor] = useState(""); // 교수자 정보 추가
  const [durationWeeks, setDurationWeeks] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      courseTitle,
      instructor,
      durationWeeks,
      totalTime,
      description,
    };

    console.log("Sending course data:", courseData);

    try {
      const response = await fetch("/api/courses/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      console.log("Server response:", response);

      if (!response.ok) {
        throw new Error("Failed to register course");
      }

      const result = await response.json();
      console.log("Course registered successfully:", result);
      navigate("/teacher/dashboard");
    } catch (error) {
      console.error("Error registering course:", error);
    }
  };

  return (
    <div>
      <h2>Register New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Title:</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Duration (Weeks):</label>
          <input
            type="text"
            value={durationWeeks}
            onChange={(e) => setDurationWeeks(e.target.value)}
          />
        </div>
        <div>
          <label>Total Time:</label>
          <input
            type="text"
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseRegistrationPage;
