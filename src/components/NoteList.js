import React from "react";
import Note from "./Note";
import "./NoteList.css";

const NoteList = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <Note
            className="expand"
            title={item.title}
            content={item.content}
            key={item.key}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
