const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/payment_system';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Payment Management System!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});