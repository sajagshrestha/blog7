import Joi from "joi";
import { Request } from "express";

export const registerValidator = (data: Request) => {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		email: Joi.string().min(6).email().required(),
		password: Joi.string().min(8).required(),
	});
	return schema.validate(data.body);
};

export const loginValidator = (data: Request) => {
	const schema = Joi.object({
		email: Joi.string().min(6).email().required(),
		password: Joi.string().min(8).required(),
	});
	return schema.validate(data.body);
};

export const blogValidator = (data:Request) =>{
	const schema = Joi.object({
		title: Joi.string().min(10).required(),
		subtitle:Joi.string().min(20),
		body: Joi.string().min(20).required(),
		author: Joi.string().required(),
	})
	return schema.validate(data.body);
}