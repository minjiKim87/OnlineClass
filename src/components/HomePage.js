import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./HomePage.css";
import "./SignLoginPage.css";

function HomePage() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1>OnlineClass</h1>
      {userInfo ? (
        <div className="auth-container">
          <p>
            Welcome, {userInfo.username} ({userInfo.role})
          </p>
          <button onClick={logout}>Log Out</button>
          <div
            className={
              userInfo.role === "teacher"
                ? "teacher-section"
                : "student-section"
            }
          >
            {userInfo.role === "teacher" ? (
              <>
                <h2>교수자</h2>
                <ul>
                  <li>
                    <Link to="/teacher/dashboard">교수자 대시보드</Link>
                  </li>
                  <li>
                    <Link to="/teacher/course/register">강의 등록</Link>
                  </li>
                  <li>
                    <Link to="/teacher/course/posts/create">게시물 작성</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h2>학생</h2>
                <ul>
                  <li>
                    <Link to="/student/dashboard">학생 대시보드</Link>
                  </li>
                  <li>
                    <Link to="/courses">강의 목록</Link>
                  </li>
                  <li>
                    <Link to="/courses/1/posts">강의별 게시물 목록</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="section-container">
          <div className="login-section">
            <div className="buttons">
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
              <Link to="/login">
                <button>Log In</button>
              </Link>
            </div>
          </div>

          <div className="teacher-section">
            <h2>교수자</h2>
            <ul>
              <li>
                <Link to="/teacher/dashboard">교수자 대시보드</Link>
              </li>
              <li>
                <Link to="/teacher/course/register">강의 등록</Link>
              </li>
              <li>
                <Link to="/teacher/course/posts/create">게시물 작성</Link>
              </li>
            </ul>
          </div>
          <div className="student-section">
            <h2>학생</h2>
            <ul>
              <li>
                <Link to="/student/dashboard">학생 대시보드</Link>
              </li>
              <li>
                <Link to="/courses">강의 목록</Link>
              </li>
              <li>
                <Link to="/courses/1/posts">강의별 게시물 목록</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
