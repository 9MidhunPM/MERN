import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import { fetchNotes, createNote, updateNote, deleteNote } from './services/api';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentNote, setCurrentNote] = useState(null);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const fetchedNotes = await fetchNotes();
                setNotes(fetchedNotes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };
        getNotes();
    }, []);

    const handleSubmitNote = async (note) => {
        try {
            if (currentNote) {
                // Update existing note
                const updatedNote = await updateNote(currentNote._id, note);
                setNotes(notes.map(n => (n._id === currentNote._id ? updatedNote : n)));
            } else {
                // Create new note
                const newNote = await createNote(note);
                setNotes([...notes, newNote]);
            }
            setCurrentNote(null);
        } catch (error) {
            console.error('Error submitting note:', error);
        }
    };

    const handleEditNote = (note) => {
        setCurrentNote(note);
    };

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote(id);
            setNotes(notes.filter(n => n._id !== id));
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const clearCurrentNote = () => {
        setCurrentNote(null);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen py-8">
            <div className="container">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-indigo-700 mb-2">📝 Notes App</h1>
                    <p className="text-gray-600">Organize your thoughts, one note at a time</p>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <NoteForm 
                    currentNote={currentNote}
                    onSubmit={handleSubmitNote}
                    clearCurrent={clearCurrentNote}
                />
                <NoteList 
                    notes={filteredNotes} 
                    onEditNote={handleEditNote}
                    onDeleteNote={handleDeleteNote} 
                />
            </div>
        </div>
    );
};

export default App;