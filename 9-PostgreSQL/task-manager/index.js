const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'task_manager',
  password: 'your_password',  // Replace with your password
  port: 5432,
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new task
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});