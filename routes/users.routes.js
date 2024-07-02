// import express
const express = require('express');

// controllers
const {
    createUser,
    getAllUsers
} = require('../controllers/users.controller');

// create router
const usersRouter = express.Router();

// actions/routers
usersRouter.post('/', createUser);
usersRouter.get('/', getAllUsers);


// export routers/actions
module.exports = { usersRouter };