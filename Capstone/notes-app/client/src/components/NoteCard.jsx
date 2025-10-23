import React from 'react';

const NoteCard = ({ note, onEdit, onDelete }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="note-footer">
                <span className="note-date">
                    {formatDate(note.createdAt)}
                </span>
                <div className="note-actions">
                    <button onClick={() => onEdit(note)} className="edit-button">
                        Edit
                    </button>
                    <button onClick={() => onDelete(note._id)} className="delete-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;