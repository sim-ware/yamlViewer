//import express
const express = require('express');
const app = express();

// Routes which should handle request
app.get("/", (req, res, next) => {
    res.json({ test: "Hello Joel" });
});

//export app
module.exports = app;
