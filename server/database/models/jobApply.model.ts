import mongoose from "mongoose";
import { InterviewStatus } from "../../types.job";

const applicationSchema : mongoose.Schema = new mongoose.Schema({
    company : {type : String ,required : true},
    applied_on : {type : Date , default : new Date()},
    role : {type : String , required : true},
    status : { type : String, required : true},
    location : {type : String, required : true},
    type : {type : String, required : true},
    interview : {type : String , required : false , default : InterviewStatus["Not Scheduled"]},
    contacted : { type  : Boolean , default : false},
    website : { type : String, required : true},
    salary_range : {type : String, required : false }
})

const Appliations = mongoose.model('Application', applicationSchema)