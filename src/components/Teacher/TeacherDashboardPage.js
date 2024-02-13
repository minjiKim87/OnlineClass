import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboardPage = () => {
  const courses = [
    { id: 1, title: "Introduction to Programming" },
    { id: 2, title: "Advanced Web Development" },
  ];

  return (
    <div>
      <h2>My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} -{" "}
            <Link to={`/course/${course.id}/posts`}>View Posts</Link>
          </li>
        ))}
      </ul>
      <Link to="/course/register">Register New Course</Link>
    </div>
  );
};

export default TeacherDashboardPage;
