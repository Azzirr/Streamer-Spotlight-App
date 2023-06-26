const express = require('express');
const app = express();
const corsMiddleware = function(req, res, next) {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        next();
    });
}

module.exports = corsMiddleware;