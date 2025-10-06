const express = require('express');
const cors = require('cors');
const axios = require('axios');
const sampleEmployees = require('./sampleData');
const config = require('./config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory storage for employees (in production, use a database)
let employees = [];

// Add error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Employee Dashboard API Server',
    endpoints: {
      health: '/api/health',
      users: '/api/users (external users only)',
      allEmployees: '/api/all-employees (external + local employees)',
      employees: '/api/employees (GET: local employees, POST: add employee)'
    },
    frontend: 'Visit http://localhost:3000 for the React application'
  });
});

// Route to fetch users (custom or external)
app.get('/api/users', async (req, res) => {
  try {
    if (config.dataSource === 'custom') {
      res.json(sampleEmployees);
    } else {
      const response = await axios.get(config.externalApiUrl);
      res.json(response.data);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route to get all employees (sample data + local employees)
app.get('/api/all-employees', async (req, res) => {
  try {
    let sampleUsers;
    
    if (config.dataSource === 'custom') {
      sampleUsers = sampleEmployees;
    } else {
      const response = await axios.get(config.externalApiUrl);
      sampleUsers = response.data;
    }
    
    // Combine sample users with local employees
    const allEmployees = [
      ...sampleUsers.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: 'external',
        username: user.username,
        address: user.address
      })),
      ...employees.map(emp => ({
        id: emp.id,
        name: emp.name,
        email: `${emp.name.toLowerCase().replace(/\s+/g, '.')}@company.com`, // Generate email
        type: 'local',
        designation: emp.designation,
        location: emp.location,
        salary: emp.salary
      }))
    ];
    
    res.json(allEmployees);
  } catch (error) {
    console.error('Error fetching all employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Route to get only local employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// Route to handle employee form submission
app.post('/api/employees', (req, res) => {
  const { name, designation, location, salary } = req.body;
  
  // Basic validation
  if (!name || !designation || !location || !salary) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create new employee
  const employee = {
    id: Date.now(), // Simple ID generation
    name,
    designation,
    location,
    salary: parseFloat(salary)
  };

  // Add to in-memory storage
  employees.push(employee);

  res.json({ message: 'Employee added successfully', employee });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
