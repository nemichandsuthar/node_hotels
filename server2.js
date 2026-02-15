console.log('SERVER FILE LOADED');
console.log('THIS IS THE ACTIVE SERVER FILE');

// import dotenv from "dotenv";
// dotenv.config(); commenting since getting error and adding to db.js file

import express from 'express'
const app = express()
import db from "./db.js";
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
// require('dotenv').config(); commenting since the module used is ES6

app.use(express.json());

const PORT = process.env.PORT || 3000;

//get method
app.get('/',(req, res)=>{
  res.send('Welcome to our hotel')
  // res.status(200).json();
})

//router for person3
app.use('/person3', personRoutes);

//router for menu1
app.use('/menu1',menuRoutes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

