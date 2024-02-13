import React from "react";
import { Link } from "react-router-dom";

const StudentDashboardPage = () => {
  const enrolledCourses = [
    { id: 1, title: "Introduction to Computer Science" },
    { id: 2, title: "Advanced Mathematics" },
  ];

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            {course.title} -{" "}
            <Link to={`/courses/${course.id}/posts`}>View Posts</Link>
          </li>
        ))}
      </ul>
      <Link to="/courses">Browse All Courses</Link>
    </div>
  );
};

export default StudentDashboardPage;
