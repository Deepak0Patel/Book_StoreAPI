const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const authMiddleware = require("../middleware/authMiddleware");

// Create a book
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all books with pagination
router.get("/", async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(search, "i") },
        { author: new RegExp(search, "i") },
        { genre: new RegExp(search, "i") },
      ],
    })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    res.json(books);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read a single book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a book
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a book
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
