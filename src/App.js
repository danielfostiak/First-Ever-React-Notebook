import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

if (!localStorage.getItem("noteList")) {
  localStorage.setItem("noteList", "[]");
}

const App = () => {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList"))
  );

  const getInfo = (info) => {
    localStorage.setItem("noteList", JSON.stringify([...noteList, info]));
    setNoteList(() => [...noteList, info]);
  };

  const getRemovalID = (removalID) => {
    setNoteList(noteList.filter((note) => !(note.id === removalID)));
    localStorage.setItem(
      "noteList",
      JSON.stringify(noteList.filter((note) => !(note.id === removalID)))
    );
  };

  return (
    <div>
      <AddNote liftInfo={getInfo} />
      <NoteList items={noteList} liftID={getRemovalID} />
    </div>
  );
};

export default App;
