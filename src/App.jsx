import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from './utils';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import NoteSearch from './components/NoteSearch';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note));
  };

  const onSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan Pribadi</h1>
      </header>
      <div className="note-app__body">
        <NoteInput addNote={addNote} />
        <NoteSearch onSearch={onSearch} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={filteredNotes.filter(note => !note.archived)} onDelete={deleteNote} onToggleArchive={toggleArchive} />
        <h2>Arsip Catatan</h2>
        <NoteList notes={filteredNotes.filter(note => note.archived)} onDelete={deleteNote} onToggleArchive={toggleArchive} />
      </div>
    </div>
  );
}

export default App;
