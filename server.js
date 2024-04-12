const express = require('express');
const app = express();
const port = 3000; 

// Define a route handler for the root URL
app.use(express.static('static_files'))

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});