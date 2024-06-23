// import models
const { User } = require('../models/user.model');

// controllers: user
const createUser = async(req, res, next) => {
    // receive data
    const {
        role,
        first_name,
        second_name,
        first_lastname,
        second_lastname,
        gender,
        dni,
        birthdate,
        nationality,
        phone,
        email,
        password,
        status
    } = req.body;
    
    // add to table
    const newUser = await User.create({
        role,
        first_name,
        second_name,
        first_lastname,
        second_lastname,
        gender,
        dni,
        birthdate,
        nationality,
        phone,
        email,
        password,
        status
    })

    // 201 => success and a resource has been created
    res.status(201).json({
        status: 'success',
        data: { newUser }
    })
};

// export controllers
module.exports = { createUser };