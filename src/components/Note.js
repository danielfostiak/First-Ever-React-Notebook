import React from "react";
import "./Note.css";

const Note = (props) => {
  return (
    <div className="noteContainer expand">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
