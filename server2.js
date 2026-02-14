console.log('SERVER FILE LOADED');
console.log('THIS IS THE ACTIVE SERVER FILE');

import express from 'express'
const app = express()
import db from "./db.js";
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';

app.use(express.json());

//get method
app.get('/',(req, res)=>{
  res.send('Welcome to our hotel')
  // res.status(200).json();
})

//router for person3
app.use('/person3', personRoutes);

//router for menu1
app.use('/menu1',menuRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

