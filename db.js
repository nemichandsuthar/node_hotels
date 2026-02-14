// const mongoose = require('mongoose');

import mongoose from "mongoose";
//define the mongoDb connection URL//
const mongoURL= 'mongodb://127.0.0.1:27017/myhotels'

// //Set up mongoDB connection
mongoose.connect(mongoURL);

//     useNewUrlParser:true,
//     useUnifiedTopology:true //commenting parser and unified topology since these are default in new modules
// })

//Get the default connection
//Mongoose maintains a default connection object representing the mongoDb connection

const db = mongoose.connection;

//Define event listeners

db.on('connected',()=>{
    console.log('MongoDB connected');
});

db.on('disconnected',()=>{
    console.log('mongoDB disconnected');
});

db.on('error',(err)=>{
    console.log('error:',err);
});

//Export database connection

// module.exports = db; //commenting this since the module is in ES module

export default db;