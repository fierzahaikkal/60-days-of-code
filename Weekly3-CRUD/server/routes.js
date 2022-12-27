import express from "express";
import {
  getPosts,
  getPostsById,
  createPosts,
  updatePosts,
  deletePosts,
} from "./controller.js";

const router = express.Router();
router.get("/posts", getPosts);
router.get("/posts/:id", getPostsById);
router.post("/posts", createPosts);
router.patch("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);

export default router;
