// imports
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

// routers

// controllers

// init express app
const app = express();

// enable express app to receive JSON data
app.use(express.json());

// add security headers
app.use(helmet());

// compress responses
app.use(compression());

// define endpoints

// global error handler

// catch not-existings endpoints
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		message: `${req.method} ${req.url} does not exists in our server`,
	});
});

// export module
module.exports = { app };