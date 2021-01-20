import { Response, Request } from "express";
import User from "../models/user";
import { loginValidator, registerValidator } from "../validators";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register a new user
export const register = async (req: Request, res: Response) => {
	//check for validation
	const { error } = registerValidator(req);
	if (error) {
		return res.status(422).send(error.details[0].message);
	}

	//check for same email
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("email already exists");

	//hash password
	const hashedPassword = await bcrypt.hash(req.body.password, 10);

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

//Login
export const login = async (req: Request, res: Response) => {
	//check for validation
	const { error } = loginValidator(req);
	if (error) {
		return res.status(422).send(error.details[0].message);
	}
	//check email and password
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(422).send("Email not found");
	const passwordMatches = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!passwordMatches) return res.status(422).send("password is incorrect");
	//return jwt token
	const token = jwt.sign({ _id: user.id }, process.env.SECRET || "");
	res.send(token);
};
