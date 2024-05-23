import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import { route as user } from './src/routes/User/user.js';
import { route as dalleRoute } from './src/routes/Prompts/DallE/Dalle.js';

import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log("Mongo db connected successfully")
    } catch (error) {
        console.log("Failed to connect mongo db")
    }
})();

// app.use((req, res) => {
//     res.send("Welcome to first crud app")
// })

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})

// app.use('/api/', user);
app.use('/api/', dalleRoute)