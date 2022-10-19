const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({});
  res.json(allPosts);
};

const getPostById = async (req, res, next) => {
  try {
    const findedPost = await Post.findById(req.params.id);
    if (findedPost) {
      res.json(findedPost);
    } else {
      res.json({
        message: `${req.params.id} id bulunamadı`,
      });
    }
  } catch (error) {
    next(error);
  }
};

const addPost = async (req, res, next) => {
  try {
    const newPost = new Post({
      _id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });

    if (newPost) {
      const result = await newPost.save();
      res.json(result);
    } else {
      res.json({
        message: "Post eklenemedi",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  delete req.body.createdAt;
  delete req.body.updatedAt;

  try {
    const updatedPost = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (updatedPost) {
      return res.json(updatedPost);
    } else {
      return res.status(404).json({
        message: "Post bulunamadı",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const findedPost = await Post.findByIdAndDelete(req.params.id);
    if (findedPost) {
      return res.json({
        message: "Post silindi.",
        post: findedPost,
      });
    } else {
      res.json({
        message: "Post silinirken hata bir oluştu",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
