import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access denied");
	try {
		jwt.verify(token, process.env.SECRET || "");
		next();
	} catch (err) {
		res.status(400).send("Invalid function");
	}
};

export default verifyUser;
