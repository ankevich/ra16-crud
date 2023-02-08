import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Note = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
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
      <HeaderContainer>
        <h1>Notes</h1>
        <button onClick={() => {}}>🔄</button>
      </HeaderContainer>
      <NotesContainer>
        {notes.map((note) => (
          <Note key={note.id}>
            <button onClick={() => {}}>❌</button>
            <p>{note.content}</p>
          </Note>
        ))}
      </NotesContainer>
    </>
  );
}

export default App;
