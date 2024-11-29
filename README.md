# Task Management System  

The **Task Management System** is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It enables users to manage their tasks, providing features like creating, updating, and deleting tasks.  

---

## Features  

- **Task Management**:  
  - Create or update tasks with a title, description, and status (Pending/Completed).  
  - Delete tasks.  
  - View a list of tasks with all details.  

- **Database Integration**:  
  - Tasks are securely stored in a MongoDB database.

- **Backend API**:  
  - RESTful API endpoints for performing CRUD operations on tasks.

- **Frontend Interface**:  
  - Built using React.js, with a user-friendly interface for interacting with tasks.

---

## Technologies Used  

### Frontend  
- React.js  
- Axios  

### Backend  
- Node.js  
- Express.js  

### Database  
- MongoDB  

### Others  
- Dotenv for managing environment variables  

---

## Prerequisites  

Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v16 or later recommended)  
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas for cloud storage)  

---

## Getting Started  

### Installation  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/<your-username>/task-management-system.git
   ```
   
2. **Navigate to the Project Directory**:  
   Move into the project directory.  
   ```bash
   cd task-management-system
   ```
   
3. **Set Up Environment Variables**:  
   - Navigate to the `backend` directory.  
     ```bash
     cd backend
     ```  
   - Create a `.env` file to store sensitive information like MongoDB URI.  
     ```bash
     touch .env
     ```  
   - Add the following environment variables to the `.env` file. Replace `<username>` and `<password>` with your MongoDB Atlas credentials:  
     ```plaintext
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb?retryWrites=true&w=majority
     PORT=5000
     ```  

4. **Install Dependencies**:  
   - Install backend dependencies:  
     ```bash
     npm install
     ```  
   - Navigate to the `frontend` directory and install frontend dependencies:  
     ```bash
     cd ../frontend
     npm install
     ```  

5. **Run the Application**:  
   - Start the backend server:  
     ```bash
     cd ../backend
     npm start
     ```  
   - In another terminal window, start the frontend server:  
     ```bash
     cd ../frontend
     npm start
     ```  

6. **Access the Application**:  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000). The backend should be running on port 5001, and the frontend will be running on port 3000 by default.

---

## API Endpoints  

| Method | Endpoint        | Description                  |  
|--------|-----------------|------------------------------|  
| POST   | `/api/task`     | Create or update a task      |  
| DELETE | `/api/task/:id` | Delete a task                |  

---

## Notes  

- Ensure that the MongoDB database is running locally or that your MongoDB Atlas cluster is properly configured.  
- Use tools like [Postman](https://www.postman.com/) to test the backend API endpoints.  
- The `.env` file should **not** be committed to version control. Make sure to add it to your `.gitignore`.  
- For MongoDB, you can use either a local instance or a cloud instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  


