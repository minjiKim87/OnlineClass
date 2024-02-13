import React, { useState } from "react";

const CoursePostCreationPage = () => {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Creating post:", postContent);
  };

  return (
    <div>
      <h2>Create Post for Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Content:</label>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CoursePostCreationPage;
