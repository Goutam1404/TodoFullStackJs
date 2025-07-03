import api from "../api"; // axios instance with baseURL + withCredentials

export const createNote = async (noteData) => {
  const response = await api.post("/note/create-note", noteData);
  return response.data;
};

export const getAllNotes = async () => {
  const response = await api.get("/note/view-note");
  return response.data.notes;
};

export const updateNote = async (id, noteData) => {
  const response = await api.put(`/note/update-note/${id}`, noteData);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await api.delete(`/note/delete-note/${id}`);
  return response.data;
};
