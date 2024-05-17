import express from 'express';
import 'dotenv/config';
import connectToDb from './db/conn.js';

//express app
const app = express();
const PORT = process.env.PORT || 3000;

connectToDb();

// CHANGE
// import users from "./routes/usersRoute.js";
// import dailyHealth from "./routes/dailyHealthRoute.js";
// import sleepLogs from "./routes/sleepLogsRoute.js";

app.use(express.json());

// Use our Routes
// app.use("/api/users", users);
// app.use("/api/dailyhealth", dailyHealth);
// app.use("/api/sleeplogs", sleepLogs);

// END CHANGING


//middleware
app.use((req,res,next) => {
 console.log(req.path, req.method);
 next();
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
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
