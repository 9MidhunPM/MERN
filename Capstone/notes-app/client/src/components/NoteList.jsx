import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
    if (!notes || notes.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-8">
                <p>No notes yet. Create your first note above!</p>
            </div>
        );
    }

    return (
        <div className="note-list">
            {notes.map(note => (
                <NoteCard 
                    key={note._id} 
                    note={note} 
                    onEdit={onEditNote}
                    onDelete={onDeleteNote}
                />
            ))}
        </div>
    );
};

export default NoteList;