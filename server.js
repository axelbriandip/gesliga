// imports
const express = require('express');
const dotenv = require('dotenv');
const { db } = require('./utils/database.util');
const { usersRouter } = require('./routes/users.routes');

// utils
const { initModels } = require('./models/initModels');

dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use('/api/v1/users', usersRouter);

// start server
const startServer = async () => {
    try {
        // authenticate db
        await db.authenticate();
        console.log('Database authenticated successfully.');
        
        // establish relations beetwen models
        initModels();
        
        // sync db
        await db.sync({ force: true }); // Sincroniza las tablas, { force: true } borra y recrea las tablas en cada inicio
        console.log('Database synced successfully.');

        // set server to listen
        // const DB_PORT = process.env.DB_PORT || 4000;
        // const DB_PORT = 5432;

        // running app!
        app.listen(process.env.PORT, () => {
            console.log("Express app running in port", process.env.PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

// catch not-existings endpoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server!`,
    });
});

// call start server
startServer();