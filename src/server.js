require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

connectDB();  // Connect to MongoDB

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});