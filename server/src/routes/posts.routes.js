import { Router } from "express";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  getPost,
} from "../controllers/posts.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPostSchema } from "../schemas/post.schema.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
