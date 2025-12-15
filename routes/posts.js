const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/getPosts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, count: posts.length, posts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post('/addPosts', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ success: false, message: 'title and content required' });

    const saved = await new Post({ title, content }).save();
    res.status(201).json({ success: true, post: saved });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.delete('/delPosts/:id?', async (req, res) => {
  try {
    const id = req.params.id || req.body.id;
    if (!id)
      return res.status(400).json({ success: false, message: 'Provide id' });

    const del = await Post.findByIdAndDelete(id);
    if (!del)
      return res.status(404).json({ success: false, message: 'Post not found' });

    res.json({ success: true, message: 'Post deleted', post: del });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.patch('/post/:id', async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated)
      return res.status(404).json({ success: false, message: 'Post not found' });

    res.json({ success: true, post: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
