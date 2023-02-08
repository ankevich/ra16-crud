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

const NewNote = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    height: 100%;
    min-height: 120px;
  }
`;

function App() {
  const [notes, setNotes] = useState([]);

  const refreshNotes = () => {
    fetch("http://127.0.0.1:7777/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    refreshNotes();
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
            <button
              onClick={() => {
                fetch(`http://localhost:7777/notes/${note.id}`, {
                  method: "DELETE",
                }).then(() => {
                  refreshNotes();
                });
              }}
            >
              ❌
            </button>
            <p>{note.content}</p>
          </Note>
        ))}
      </NotesContainer>
      <NewNote>
        <strong>New note</strong>
        <textarea />
        <button onClick={() => {}}>➡️</button>
      </NewNote>
    </>
  );
}

export default App;
