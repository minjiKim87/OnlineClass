import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        if (!response.ok) {
          throw new Error(`Server responded with a status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error.message);
      }
    };
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    const response = await fetch("/api/courses/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseId }),
    });
    if (response.ok) {
      alert("수강신청이 완료되었습니다.");
      navigate("/student/dashboard");
    } else {
      alert("수강신청에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>All Courses</h2>
      <table>
        <thead>
          <tr>
            <th>강의명</th>
            <th>교수자</th>
            <th>수강신청</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
              <td>
                <button onClick={() => handleEnroll(course.id)}>
                  수강신청
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;
