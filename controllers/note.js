const Note = require('./../models/note');

exports.getAllNotes = async (req, res, next) => {
    const notes = await Note.find({ createdBy: req.user.id });
    res.status(200).json(notes);
};

exports.postNote = async (req, res, next) => {
    const newNote = new Note(req.body);
    newNote.createdBy = req.user.id;
    try {
        const note = await newNote.save();
        res.status(201).json(note);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.getNoteById = async (req, res, next) => {
    const { noteId } = req.params;
    try {
        const note = await Note.findById(noteId);
        res.status(200).json(note);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.updateNote = async (req, res, next) => {
    const { noteId } = req.params;
    try {
        await Note.findByIdAndUpdate(noteId, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.deleteNote = async (req, res, next) => {
    const { noteId } = req.params;
    try {
        await Note.findByIdAndRemove(noteId);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};
