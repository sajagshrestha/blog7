import { Router } from "express";
import { createBlog } from "../controllers/blogController";
import verifyUser from "../verifyUser";

const blogRouter = Router();

//create a blog
blogRouter.post("/create-blog", verifyUser, createBlog);
export default blogRouter;
