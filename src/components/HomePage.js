import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>OnlineClass</h1>
      <div className="section-container">
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
            </li>{" "}
            {}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
