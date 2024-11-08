import React, { useState } from 'react';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && body) {
      addNote({
        title,
        body
      });
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="note-input">
      <h2>Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={maxTitleLength}
        />
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxTitleLength - title.length}
        </p>
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default NoteInput;
