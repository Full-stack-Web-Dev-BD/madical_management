const mongoose=require('mongoose')
const Schema=mongoose.Schema

const  appointSchema=new Schema({
    UHID:String,
    patientInformation: Array,
    SID:String,
    appointmentDate:String,
    priority:String,
    time:String,
})
const appointModel=mongoose.model('appointModel',appointSchema)
module.exports=appointModel