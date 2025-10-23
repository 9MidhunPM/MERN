import React, { useState, useEffect } from 'react';

const NoteForm = ({ currentNote, onSubmit, clearCurrent }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentNote) {
            setTitle(currentNote.title);
            setContent(currentNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [currentNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        clearCurrent();
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input-title"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="input-content"
            />
            <button type="submit" className="submit-button">
                {currentNote ? 'Update Note' : 'Add Note'}
            </button>
            {currentNote && (
                <button type="button" onClick={clearCurrent} className="clear-button">
                    Clear
                </button>
            )}
        </form>
    );
};

export default NoteForm;