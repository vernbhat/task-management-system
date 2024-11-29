import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState({
		title: "",
		description: "",
		status: "Pending",
	});
	const [isEditing, setIsEditing] = useState(false);

	const fetchTasks = async () => {
		try {
			const response = await axios.get("http://localhost:5001/api/tasks");
			setTasks(response.data);
		} catch (err) {
			console.error("Error fetching tasks:", err);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTask({ ...task, [name]: value });
	};

	const handleEdit = (taskToEdit) => {
		setTask({
			id: taskToEdit._id,
			title: taskToEdit.title,
			description: taskToEdit.description,
			status: taskToEdit.status,
		});
		setIsEditing(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isEditing) {
				await axios.put(
					`http://localhost:5001/api/task/${task.id}`,
					task
				);
			} else {
				await axios.post("http://localhost:5001/api/task", task);
			}
			fetchTasks();
			setTask({ title: "", description: "", status: "Pending" });
			setIsEditing(false);
		} catch (err) {
			console.error("Error saving task:", err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:5001/api/task/${id}`);
			fetchTasks();
		} catch (err) {
			console.error("Error deleting task:", err);
		}
	};

	return (
		<div className="container">
			<h1>Task Management</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Task Title"
					value={task.title}
					onChange={handleInputChange}
					required
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={task.description}
					onChange={handleInputChange}
				/>
				<select
					name="status"
					value={task.status}
					onChange={handleInputChange}
				>
					<option value="Pending">Pending</option>
					<option value="Completed">Completed</option>
				</select>
				<button type="submit">
					{isEditing ? "Update Task" : "Add Task"}
				</button>
				{isEditing && (
					<button
						type="button"
						onClick={() => {
							setTask({
								title: "",
								description: "",
								status: "Pending",
							});
							setIsEditing(false);
						}}
						className="cancel-button"
					>
						Cancel
					</button>
				)}
			</form>
			<div className="tasks-list">
				<h2>Tasks</h2>
				{tasks.map((task) => (
					<div key={task._id} className="task-item">
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<p>
							Status:
							<span
								className={`status status-${task.status.toLowerCase()}`}
							>
								{task.status}
							</span>
						</p>
						<div className="task-buttons">
							<button
								className="edit-button"
								onClick={() => handleEdit(task)}
							>
								Edit
							</button>
							<button
								className="delete-button"
								onClick={() => handleDelete(task._id)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
