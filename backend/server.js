import express from 'express';
import 'dotenv/config';
import connectToDb from './db/connect.js';

import cors from 'cors' // connect backend and frontend

//express app
const app = express();
const PORT = process.env.PORT || 3000;

connectToDb();


import usersProfiles from "./routes/users-profiles-routes.js";
import petsProfiles from "./routes/pets-profiles-routes.js";


//middleware
app.use(cors()) // connect backend and frontend
app.use(express.json());


// Use our Routes

app.use("/api/users", usersProfiles);
app.use("/api/pets", petsProfiles);


//middleware
app.use((req,res,next) => {
 console.log(req.path, req.method);
 next();
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the server'})
}) 
 

// Global error handling
app.use((err, req, res, next) => {
    console.error(err);  

    if (res.headersSent) {
        return next(err);
    }

    res.status(500); 

    if (app.get('env') === 'development') {
        res.send(`Error: ${err.message}`);
    } else {
        res.send("Seems like we messed up somewhere...");
    }
});

// listen for request & server error handling
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});
