// imports
const { DataTypes, Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// access to enviroment variables
// dotenv.config({ path: './config.env' });
dotenv.config();

// establish connection test
const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
	  host: process.env.DB_HOST,
	  port: process.env.DB_PORT,
	  dialect: 'postgres'
	}
);


// export
module.exports = { db, DataTypes };