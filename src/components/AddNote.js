import React, { useState } from "react";
import "./AddNote.css";

const AddNote = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEnteredContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      id: Math.random(),
      title: enteredTitle,
      content: enteredContent,
    };

    props.liftInfo(info);

    setEnteredTitle("");
    setEnteredContent("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">{"Title"}</label>
        <input
          className="input-container"
          id="title"
          value={enteredTitle}
          type="text"
          onChange={handleTitleChange}
        />
        <br />

        <label htmlFor="content">Content</label>
        {/* <input
          id="content"
          value={enteredContent}
          type="text"
          onChange={handleContentChange}
        /> */}
        <textarea
          className="input-container"
          id="content"
          value={enteredContent}
          onChange={handleContentChange}
        ></textarea>
        <br />

        {/* <label htmlFor="submit">Submit</label> */}
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
};

export default AddNote;
