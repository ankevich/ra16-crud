import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Note = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
max-width: 300px;
`;

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
      <h1>Notes</h1>
      <button onClick={() => {}}>🔄</button>

      {notes.map((note) => (
        <Note key = {note.id}>
          <p>{note.content}</p>
        </Note>
      ))}
    </>
  );
}



export default App;
