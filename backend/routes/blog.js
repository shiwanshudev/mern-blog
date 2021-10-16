const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Blog List
router.get("/", async (req, res) => {
  try {
    const foundBlogs = await Blog.find();
    res.status(200).json(foundBlogs);
  } catch (error) {
    res.status(400).json({ error, message: "Error fetching blogs" });
  }
});

// Create Blog
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newBlog = new Blog({
    title,
    description,
  });
  try {
    await newBlog.save();
    res.status(200).json("Blog created succesfully!");
  } catch (error) {
    res.status(400).json({ error, message: "Error creating blog" });
  }
});

// Edit Blog and View Blog
router.get("/:id", async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    res.status(200).json(foundBlog);
  } catch (error) {
    res.status(400).json({ error, message: "Blog Not Found!" });
  }
});

// Edit Blog
router.post("/update/:id", async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.params.id);
    const { title, description } = req.body;
    foundBlog.title = title;
    foundBlog.description = description;
    res.status(200).json("Blog edited succesfully!");
    await foundBlog.save();
  } catch (error) {
    res.status(400).json({ error, message: "Error Editing Blog!" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog deleted succesfully!");
  } catch (error) {
    res.status(400).json({ error, message: "Error deleting blog!" });
  }
});
module.exports = router;
