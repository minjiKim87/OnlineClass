import React from "react";
import { useParams, Link } from "react-router-dom";

const CourseDetailPage = () => {
  let { courseId } = useParams();

  const courseInfo = {
    title: "Introduction to Computer Science",
    description: "This course will cover the basics of computer science.",
    instructor: "Professor Smith",
  };

  const posts = [
    {
      id: 1,
      title: "Welcome to the course",
      author: "Professor Smith",
      date: "2021-09-01",
    },
  ];

  return (
    <div>
      <h2>{courseInfo.title}</h2>
      <p>{courseInfo.description}</p>
      <p>Instructor: {courseInfo.instructor}</p>
      <div>
        <h3>Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> by {post.author} on {post.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailPage;
