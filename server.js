// imports
const { app } = require('./app');
// const dovent = require('dotenv');

// utils


// dotenv
// dotenv.config({ path: './config.env' })

// start server
const startServer = async () => {
    try {
        // establish relations beetwen models

        // sync db

        // set server to listen
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log("Express app running in port ", PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

// call start server
startServer();