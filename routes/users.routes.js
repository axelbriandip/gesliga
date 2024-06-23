// import express
const express = require('express');

// controllers
const { createUser } = require('../controllers/users.controller');

// create router
const usersRouter = express.Router();

// actions/routers
usersRouter.post('/', createUser);

// export routers/actions
module.exports = { usersRouter };