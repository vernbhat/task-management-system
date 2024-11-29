const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "../.env" });

if (!process.env.MONGO_URI) {
	console.error("MONGO_URI is not defined in environment variables");
	process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
