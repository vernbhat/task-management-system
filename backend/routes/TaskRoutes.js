const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.post("/task", async (req, res) => {
	const { id, title, description, status } = req.body;
	try {
		let task;
		if (id) {
			task = await Task.findByIdAndUpdate(
				id,
				{ title, description, status },
				{ new: true }
			);
		} else {
			task = await Task.create({ title, description, status });
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error saving task", error });
	}
});

router.delete("/task/:id", async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Task deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting task", error });
	}
});

router.get("/tasks", async (req, res) => {
	try {
		const tasks = await Task.find().sort({ createdAt: -1 });
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ message: "Error fetching tasks", error });
	}
});

router.put("/task/:id", async (req, res) => {
	const { title, description, status } = req.body;
	try {
		const task = await Task.findByIdAndUpdate(
			req.params.id,
			{ title, description, status },
			{ new: true }
		);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error updating task", error });
	}
});

module.exports = router;
