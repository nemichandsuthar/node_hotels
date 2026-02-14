import mongoose from "mongoose";

const menuItems= new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required: true,
    },
    taste :{
        type : String,
        enum : ["Sweet", "Sour", "Salty"],
        required :true,
    },
    is_drink:{
        type : Boolean,
        default: false,
    },
    ingredients:{
        type : [String],
        default :[],
        required : true,
    },
    num_Sales :{
        type : Number,
        default: 0,
    }
});

const MenuItems = mongoose.model('MenuItems',menuItems);
export default MenuItems;

//comment added to see newer version