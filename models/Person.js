import mongoose from "mongoose";
const personSchema = new mongoose.Schema({
    name :{
        type : String,
        required:true
    },
    age :{
        type : Number
    },
    work:{
        type : String,
        enum : ['Chef','manager','waiter'],
        required : true
    },
    mobile:{
        type : Number,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    address:{
        type:String,
        required :true
    },
    salary:{
        type : Number,
        // required:true
    }
})

const Person = mongoose.model('person',personSchema);
export default Person;