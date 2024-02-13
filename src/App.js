import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TeacherDashboardPage from "./components/Teacher/TeacherDashboardPage";
import CourseRegistrationPage from "./components/Teacher/CourseRegistrationPage";
import CoursePostCreationPage from "./components/Teacher/CoursePostCreationPage";
import StudentDashboardPage from "./components/Student/StudentDashboardPage";
import CoursesPage from "./components/Student/CoursesPage";
import CoursePostsPage from "./components/Student/CoursePostsPage";
import CourseDetailPage from "./components/Student/CourseDetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
          <Route
            path="/teacher/course/register"
            element={<CourseRegistrationPage />}
          />
          <Route
            path="/teacher/course/posts/create"
            element={<CoursePostCreationPage />}
          />
          <Route path="/student/dashboard" element={<StudentDashboardPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route
            path="/courses/:courseId/posts"
            element={<CoursePostsPage />}
          />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
