const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
    type:String
})
module.exports= suserModel=mongoose.model('userModel',userSchema)