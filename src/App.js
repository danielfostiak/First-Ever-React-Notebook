import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

const App = () => {
  const [noteList, setNoteList] = useState([]);
  const getInfo = (info) => {
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
