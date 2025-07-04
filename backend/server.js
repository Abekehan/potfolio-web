import express from 'express'
import dotenv, { config } from "dotenv";
import { connect } from 'http2';
import {connectDB}  from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 ");
})



// для подключения сервера пишется нмп ран дев, а дев должно находится в разделе скрипт в джейсоне, через нодемон.
