import express from 'express';
import 'dotenv/config';
// import connectToDb from './db/conn.js';

//express app
const app = express();
const PORT = process.env.PORT || 3000;;

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
}) 
 
// listen for request & server error handling
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});
