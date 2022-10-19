const express = require("express");
const router = express.Router();
const postController = require("../controllers/post_controller");

router.get("/", postController.getAllPosts);

router.get("/:id", postController.getPostById);

router.post("/", postController.addPost);

router.patch("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

module.exports = router;
