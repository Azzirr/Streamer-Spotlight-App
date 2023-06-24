const express = require('express');
const app = express();
const corsMiddleware = require('./corsMiddleware');

corsMiddleware();

app.get('/streamers', (req, res, next) => {
    res.send([{"user": "john"}, {"user": "james"}]);
})

app.listen(4700, console.log('Server started on port 4700'));