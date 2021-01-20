import {Router} from 'express';
import { createBlog } from '../controllers/blogController';

const blogRouter = Router();

//create a blog 
blogRouter.post('/create-blog',createBlog)
export default blogRouter;