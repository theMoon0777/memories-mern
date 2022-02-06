import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	name: String,
	creator: String,
	tags: [String],
	_private: {
		type: Boolean,
		default: false,
	},
	selectedFile: String,
	likes: {
		type: [String],
		default: [],
	},
	comments: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

export default mongoose.model("PostMessage", postSchema);
