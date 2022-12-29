import express from "express";
import {
  getPosts,
  getPostById,
  createPosts,
  updatePosts,
  deletePost,
} from "./controller.js";

const router = express.Router();
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", createPosts);
router.patch("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePost);

export default router;
