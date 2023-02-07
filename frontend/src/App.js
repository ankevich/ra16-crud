import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:7777/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <p>{note.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
