import React, { useState } from "react";

const CourseRegistrationPage = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registering course:", courseTitle, description);
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
