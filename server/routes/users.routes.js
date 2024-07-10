// import express
const express = require('express');

// controllers
const {
    createUser,
    getAllUsers,
    login
} = require('../controllers/users.controller');

// middlewares
const { userExists } = require('../middlewares/users.middlewares');

// create router
const usersRouter = express.Router();

// actions/routers
usersRouter.post('/', createUser);
usersRouter.post('/login', login);
usersRouter.get('/', getAllUsers);


// export routers/actions
module.exports = { usersRouter };