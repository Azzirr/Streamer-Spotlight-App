const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const corsMiddleware = require('./corsMiddleware');
const streamersRoutes = require('./streamers_routes/routes');

corsMiddleware();

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.SERVER_PORT, console.log(`Server started on port ${process.env.SERVER_PORT}`));
}).catch((error) => { 
    console.log(error);
})

app.post('/streamers', streamersRoutes);
app.get('/streamers', streamersRoutes);
app.get('/streamer/:_id', streamersRoutes);
app.put('/streamer/:_id/vote', streamersRoutes);
