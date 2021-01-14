import { Response, Request } from "express";
import User from "../models/user";
import { registerValidator } from "../validators";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
	//check fro validation
	const { error } = registerValidator(req);
	if (error) {
		return res.status(422).send(error.details[0].message);
	}

	//check for same email
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("email already exists");

	//hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//create user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		res.status(200).send(`${savedUser.name}'s account has been created`);
	} catch (err) {
		res.send(err);
	}
};

export const login = (req: Request, res: Response) => {
	res.send("login controller is working");
};
