const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/", async (req, res) => {
  const entries = await Entry.find().sort({ createdAt: -1 });
  res.json(entries);
});

router.post("/", async (req, res) => {
  const { title, note, date, location } = req.body;
  try {
    const newEntry = new Entry({ title, note, date, location });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: "Failed to save entry" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Entry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Entry not found" });
    }
    res.json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting entry" });
  }
});

module.exports = router;
