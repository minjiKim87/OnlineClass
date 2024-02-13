import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import TeacherDashboardPage from "./components/Teacher/TeacherDashboardPage";
import CourseRegistrationPage from "./components/Teacher/CourseRegistrationPage";
import CoursePostCreationPage from "./components/course/CoursePostCreationPage";
import StudentDashboardPage from "./components/Student/StudentDashboardPage";
import CoursesPage from "./components/course/CoursesPage";
import CoursePostsPage from "./components/course/CoursePostsPage";
import CourseDetailPage from "./components/course/CourseDetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
          <Route
            path="/teacher/course/register"
            element={<CourseRegistrationPage />}
          />
          <Route path="/course/:courseId/posts" element={<CoursePostsPage />} />
          <Route
            path="/course/:courseId/posts/create"
            element={<CoursePostCreationPage />}
          />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/student/dashboard" element={<StudentDashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
