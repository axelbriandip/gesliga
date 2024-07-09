// import models
const { User } = require('../models/user.model');

// controllers: user
const getAllUsers = async(req, res, next) => {
    const users = await User.findAll();

    // 201 => success and a resource has been created
    res.status(201).json({
        status: 'success',
        data: { users }
    })
}

const createUser = async(req, res, next) => {
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
        password,
        role,
    })

    // 201 => success and a resource has been created
    res.status(201).json({
        status: 'success',
        data: { newUser }
    })
};

const login = async(req,res,next) => {
    // get email and password
    const { email, password } = req.body;

    // validate if user is active
    const user = await User.findOne({
        where: { email, password, isActive: true }
    });

    // if users not exists or password doesn't match, send error
    if (!user) {
        res.status(400).json({ status: 'Wrong credentials!' })
    }

    res.status(200).json({
        status: 'success',
        data: { user }
    })
}

// export controllers
module.exports = {
    createUser,
    getAllUsers,
    login
};