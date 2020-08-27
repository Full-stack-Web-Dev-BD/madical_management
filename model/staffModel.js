const mongoose=require('mongoose')
const { number } = require('joi')
const Schema=mongoose.Schema

const  staffSchema=new Schema({
    ID:Number,
    password:String,
    allInformation:Array,
    type:String
})
const staffModel=mongoose.model('staffModel',staffSchema)
module.exports=staffModel