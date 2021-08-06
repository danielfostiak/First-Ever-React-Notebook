import React from "react";
import "./Note.css";

const Note = (props) => {
  const handleDelete = (e) => {
    const removalID = props.id;
    props.liftID(removalID);
  };

  return (
    <div className="noteContainer expand" onClick={handleDelete}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
