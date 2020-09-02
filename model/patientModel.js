const mongoose=require('mongoose')
const Schema=mongoose.Schema

const patientSchema=new Schema({
    patientInfo:Array,
    UHID:Number,
    request:Number,
    accept:Boolean
})
const patientModel=mongoose.model('patientModel',patientSchema)
module.exports=patientModel