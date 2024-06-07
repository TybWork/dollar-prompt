import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import { authRout } from './src/routes/authRoutes.js';
import { adminRoutes } from './src/routes/adminRoutes.js';
// import { route as user } from './src/routes/User/user.js';
import { route as dalleRoute } from './src/routes/Prompts/DallE/Dalle.js';

import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());
//app.use........
app.use(express.json());
app.use(cookieParser());


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

// routes
app.use('/api/user', authRout)
app.use('/api/admin', adminRoutes)


