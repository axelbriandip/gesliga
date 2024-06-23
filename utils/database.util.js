// imports
const { DataTypes, Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// access to enviroment variables
dotenv.config({ path: './.env' });

// establish connection
const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DB,
    logging: false,
    dialectOptions:
        process.env.NDOE_ENV === 'production' ? {
            ssl : {
                required: true,
                rejectUnauthorized: false
            }
        } : {}
});

// export
module.exports = { db, DataTypes };