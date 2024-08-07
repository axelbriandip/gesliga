const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// import models
const { User } = require('../models/user.model');

// utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

// controllers: user
const createUser = catchAsync(async(req, res, next) => {
    // receive data
    const {
        firstName,
        middleName,
        lastName,
        dni,
        dateOfBirth,
        gender,
        phone,
        // photo,
        email,
        password,
        role
    } = req.body;
    
    // encrypt password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // add to table
    const newUser = await User.create({
        firstName,
        middleName,
        lastName,
        dni,
        dateOfBirth,
        gender,
        phone,
        // photo,
        email,
        password: hashedPassword,
        role,
    })

    newUser.password = undefined;

    // 201 => success and a resource has been created
    res.status(201).json({
        status: 'success',
        data: { newUser }
    })
});

const login = catchAsync(async (req, res, next) => {
    // get email and password
    const { email, password } = req.body;

    // validate if user is active
    const user = await User.findOne({
        where: { email }
    });

    // if users not exists or password doesn't match, send error
    if (!user || !(await bcrypt.compare(password, user.password))) {
		const obj = new AppError('Wrong credentials', 400);
        console.log(obj);
        return next(obj);
	}

    // remove password for response
    // user.password = undefined;

    // generate jwt (payload, -secretOrPrivateKey, options)
    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    )

    // console.log(`jwt_secret -> ${process.env.JWT_SECRET}`);
    // console.log(`token -> ${token}`);

    res.status(200).json({
        status: 'success',
        data: { user, token }
    })
});

const getAllUsers = catchAsync(async(req, res, next) => {
    const users = await User.findAll();

    // 201 => success and a resource has been created
    res.status(201).json({
        status: 'success',
        data: { users }
    })
})

// export controllers
module.exports = {
    createUser,
    getAllUsers,
    login
};