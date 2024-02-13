import React from "react";

const CoursePostsPage = ({ match }) => {
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
      <h2>Course Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.author}, {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePostsPage;
