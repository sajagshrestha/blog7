import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
	title: {
		type: "string",
		required: true,
		min: 10,
	},
	subtitle: {
		type: "string",
		min: 20,
	},
	body: {
		type: "string",
		min: 20,
	},
	author: {
		type: "ObjectId",
		ref: "user",
	},
});

export default model("blog", BlogSchema);
