import { Request, Response } from "express";
import { blogValidator } from "../validators";
import User from "../models/user";
import Blog from "../models/blog";
export const createBlog = async (req: Request, res: Response) => {
	const { error } = blogValidator(req);
	if (error) {
		return res.status(422).send(error.details[0].message);
	}
	try {
		await User.findById(req.body.author);
	} catch (err) {
		return res.status(422).send("user not found");
	}
	const blog = new Blog(req.body);
	try {
		const savedBlog = await blog.save();
		res.send(savedBlog);
	} catch (err) {
		res.send(err);
	}
};
