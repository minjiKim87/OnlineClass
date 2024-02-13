import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeacherDashboardPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses/my", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
