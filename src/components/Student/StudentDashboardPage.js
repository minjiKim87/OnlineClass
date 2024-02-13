import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentDashboardPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const response = await fetch("/api/student/enrolled-courses");
      if (response.ok) {
        const courses = await response.json();
        setEnrolledCourses(courses);
      } else {
        console.error("Failed to fetch enrolled courses");
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course._id}>
            {course.title} -{" "}
            <Link to={`/courses/${course._id}/posts`}>View Posts</Link>
          </li>
        ))}
      </ul>
      <Link to="/courses">Browse All Courses</Link>
    </div>
  );
};

export default StudentDashboardPage;
