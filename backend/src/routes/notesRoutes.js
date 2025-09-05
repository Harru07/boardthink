import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();

// Endpoint - combination of URL + HTTP method that lets the client interact with a specific resource.
// route

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"Note created successfully"});
// });

// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({message:"Note updated successfully"});
// });

// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({message:"Note deleted successfully"});
// });

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;


