const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./Models/db'); // import the function

connectDB(); // ✅ THIS is necessary to start the MongoDB connection

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
});
