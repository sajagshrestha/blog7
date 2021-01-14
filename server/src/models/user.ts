import { Schema, Document, model } from "mongoose";

export interface IUSER extends Document {
	name: string;
	email: string;
	password: string;
}
const UserSchema = new Schema(
	{
		name: {
			type: "string",
			required: true,
			min: 6,
			max: 20,
		},
		email: {
			type: "string",
			required: true,
			min: 6,
		},
		password: {
			type: "string",
			required: true,
			min: 8,
			max: 10,
		},
	},
	{ timestamps: true }
);

export default model<IUSER>("user", UserSchema);
