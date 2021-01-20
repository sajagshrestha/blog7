import { Request, Response } from "express";
import { blogValidator } from "../validators";
import User from "../models/user";

export const createBlog = async (req:Request,res:Response) =>{
	const { error } = blogValidator(req);
	if (error) {
		return res.status(422).send(error.details[0].message);
	}
	const user = await User.findById(req.body.author);
	if(!user) {
		return res.status(422).send("user not found");
	}
	console.log(user);
}

