const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); 

const app = express();

app.use(express.json()); 


const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');


connectDB();

// Use Routes
app.use('/api/auth', authRoutes); 
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Management System API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
