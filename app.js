const express = require('express');
const app = express();
const port = 3000;
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Use the task routes
app.use('/api', taskRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500); // Set the status code to the error's status or default to 500
    res.json({
        error: {
            message: error.message // Send the error message as JSON
        }
    });
});

app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`);
});
