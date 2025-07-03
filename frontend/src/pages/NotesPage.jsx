import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
} from "../services/noteService";

const NotesPage = ({ darkTheme }) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    try {
      const data = await getAllNotes();
      setNotes(data);
    } catch (err) {
      toast.error("Failed to fetch notes");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateNote(editingId, { title, content });
        toast.success("Note updated");
      } else {
        await createNote({ title, content });
        toast.success("Note created");
      }
      setTitle("");
      setDescription("");
      setEditingId(null);
      fetchNotes();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving note");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      toast.success("Note deleted");
      fetchNotes();
    } catch {
      toast.error("Failed to delete note");
    }
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditingId(note._id);
  };

  return (
    <div
      className={`min-h-screen px-4 py-8 transition-all duration-500 ${
        darkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-200 to-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-6">My Notes</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mb-10 bg-white/10 p-6 rounded-lg shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded outline-none"
          required
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded outline-none"
          rows={4}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          {editingId ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {(notes || []).map((note) => (
          <div
            key={note._id}
            className="p-4 bg-white/10 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{note.title}</h3>
            <p className="mt-2">{note.content}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(note)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
