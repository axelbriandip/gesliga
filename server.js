// imports
const { app } = require('./app');
const dotenv = require('dotenv');

// utils
const { initModels } = require('./models/initModels');
const { db } = require('./utils/database.util');

// dotenv
dotenv.config({ path: './.env' })

// start server
const startServer = async () => {
    try {
        // authenticate db
        await db.authenticate();

        // establish relations beetwen models
        initModels();

        // sync db
        await db.sync();

        // set server to listen
        const DB_PORT = process.env.DB_PORT || 40001;

        // running app!
        app.DB_PORT(DB_PORT, () => {
            console.log("Express app running in port ", DB_PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

// call start server
startServer();