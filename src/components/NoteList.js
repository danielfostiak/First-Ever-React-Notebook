import React from "react";
import Note from "./Note";
import "./NoteList.css";

const NoteList = (props) => {
  const getID = (id) => {
    props.liftID(id);
  };

  return (
    <ul>
      {props.items.map((item) => {
        return (
          <Note
            className="expand"
            title={item.title}
            content={item.content}
            id={item.id}
            liftID={getID}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
