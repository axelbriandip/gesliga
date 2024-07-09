// import express
const express = require('express');

// controllers
const {
    createUser,
    getAllUsers,
    login
} = require('../controllers/users.controller');

// create router
const usersRouter = express.Router();

// actions/routers
usersRouter.post('/', createUser);
usersRouter.get('/', getAllUsers);
usersRouter.post('/login', login);


// export routers/actions
module.exports = { usersRouter };