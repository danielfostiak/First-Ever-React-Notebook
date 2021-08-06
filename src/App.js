import React, { useState } from "react";
import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

if (!localStorage.getItem("noteList")) {
  localStorage.setItem("noteList", "[]");
}

const App = () => {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList"))
  );
  const getInfo = (info) => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
    console.log(localStorage.getItem("noteList"));
    setNoteList(() => [...noteList, info]);
  };

  return (
    <div>
      <AddNote liftInfo={getInfo} />
      <NoteList items={noteList} />
    </div>
  );
};

export default App;
