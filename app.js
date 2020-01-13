const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MIDDLEWARE
// Parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', routes);

module.exports = app;
