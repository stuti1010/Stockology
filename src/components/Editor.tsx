"use client"
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

const Editor = () => {
  const [value, setValue] = useState(""); // State to hold the editor content

  // Handle editor content change
  const handleChange = (content) => {
    setValue(content);
  };

  return (
    <div>
      <h2>React Quill Editor</h2>
      <ReactQuill
        theme="snow" // Use the "snow" theme (default)
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "link",
          "image",
        ]}
      />
      <div>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default Editor;