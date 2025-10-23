// noteController.js

const Note = require('../models/Note');

// Get all notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
};

// Create a new note
exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    try {
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note' });
    }
};

// Update an existing note
exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content, updatedAt: new Date() }, { new: true });
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Error updating note' });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        await Note.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note' });
    }
};