import Notes from "../models/Note.model.js";

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Some fields are missing",
      });
    }
      console.log("Creating the note");
      
    const note = await Notes.create({ title, description, user: req.user.id });
    if (!note) {
      return res.status(400).json({
        success: false,
        message: "note not created",
      });
    }

    await note.save();
    console.log("Note create successfully:", note);

    return res.status(200).json({
      message: "Note created successfully",
      success: true,
      note,
    });
  } catch (error) {
    console.log(`Error in creating note:=> ${error}`);
    res.status(500).json({
      message: "Failed to create a note",
      error,
      success: false,
    });
  }
};

const getUserNote = async (req, res) => {
  try {
    const note = await Notes.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    if (!note) {
      return res.status(400).json({
        message: "can't found the note",
      });
    }
    return res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get all the notes",
      success: false,
      error,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const note = await Notes.findOne({ _id:id, user: req.user.id });
    if (!note) {
      return res.status(404).json({
        message: "can't found the note",
      });
    }
    note.title = title || note.title;
    note.description = description || note.description;

    await note.save();
    res.status(200).json({ success: true, note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findOneAndDelete({ _id:id, user: req.user.id });
    console.log(note);
    
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting note", error: error.message });
  }
};

export { createNote, getUserNote, updateNote, deleteNote };
