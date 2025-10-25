import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routesC from './routes/routesC.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('MongoDB connected successfully!')
})
.catch((error)=>{
    console.error('MongoDB connection error:', error)
});
app.use('/api/contacts' , routesC);

app.get('/' , (req , res)=>{
    res.json({message: 'contact app server is running!'})
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})