import "./App.css";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    },
  ]);
  return (
    <>
      {notes.map((note) => {
        return (
          <div className="note">
            <p>{note.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
