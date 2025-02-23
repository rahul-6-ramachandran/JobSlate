import mongoose from "mongoose";

const bookSchema : mongoose.Schema = new mongoose.Schema({
    company : {type : String ,required : true},
    applied_on : {type : Date , default : new Date()},
    role : {type : String , required : true},
    status : { type : String, required : true},
    location : {type : String, required : true},
    type : {type : String, required : true}
})