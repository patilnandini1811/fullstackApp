const express = require('express');
const router = express.Router();
const{Posts} = require ("../models");

// Get all posts
router.get("/", async (req, res)=>{
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});
// Create a new post
router.post("/",async(req, res)=>{
const post = req.body;
await Posts.create(post);
res.json(post);
});
//  Get singal post byId
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
  });
//Delete a post by ID

router.delete("/:id", async (req, res) => {
    const postId = req.params.id;
    try {
      await Posts.destroy({ where: { id: postId } });
      res.json({ message: "Post deleted successfully", id: postId });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  });



module.exports = router;