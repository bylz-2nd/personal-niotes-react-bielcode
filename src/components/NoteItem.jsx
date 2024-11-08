import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, body, createdAt, archived, onDelete, onToggleArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
          Hapus
        </button>
        <button className="note-item__archive-button" onClick={() => onToggleArchive(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
