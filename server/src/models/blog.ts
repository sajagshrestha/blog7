import { Schema, model, Document } from "mongoose";

export interface BlogInterface extends Document {
	title: string;
	subtitle?: string;
	body: string;
	author: string;
}
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

const Blog = model<BlogInterface>("blog", BlogSchema);
export default Blog;
