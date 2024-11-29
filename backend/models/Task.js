// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
// 	userId: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "User",
// 		required: true,
// 	},
// 	title: { type: String, required: true },
// 	description: { type: String },
// 	status: {
// 		type: String,
// 		enum: ["Pending", "Completed"],
// 		default: "Pending",
// 	},
// 	createdAt: { type: Date, default: Date.now },
// 	updatedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Task", taskSchema);

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String },
		status: { type: String, default: "Pending" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
