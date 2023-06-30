const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const streamersRoutes = require('./streamers_routes/routes');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

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