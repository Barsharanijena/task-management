const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Import Routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');


connectDB();

// Use Routes
app.use('/api/auth', authRoutes); // User Authentication routes
app.use('/api/tasks', taskRoutes); // Task Management routes

// Default Route for Testing
app.get('/', (req, res) => {
  res.send('Task Management System API is running!');
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
