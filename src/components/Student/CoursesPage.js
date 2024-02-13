import React from "react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const allCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Professor Smith",
    },
    { id: 2, title: "Advanced Mathematics", instructor: "Professor Johnson" },
  ];

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {allCourses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
