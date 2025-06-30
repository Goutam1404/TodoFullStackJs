import { createNote } from "../controllers/notes.controller.js";
import express from express;
import { isLoggedIn } from "../middleware/auth.middleware.js";
const notesRouter=express.router();

notesRouter.post("/create-note",isLoggedIn, createNote);
notesRouter.get("/view-note",isLoggedIn,getNote)
export default notesRouter;