const Joi = require('joi')
const mongoose = require('mongoose')

const basicInfo = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3,
        maxlength:40
    },
    fatherName:{
        type: String,
        required: true,
        minlength:3,
        maxlength:40
    },
    grandFatherName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    },
    date:{
        type: Date,
        required:true,
    },
    bloodGroup:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    parentSpouse:{
        type:String,
        minlength:3,
        maxlength:40,
        required:true
    },
    birthPlace:{
        type:String,
        minlength:3,
        maxlength:100,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    cardNumber:{
        type:String,
        minlength:5,
        maxlength:50,
        required:true,
    },
    nationalIdNumber:{
        type:String,
        minlength:7,
        maxlength:40,
        required:true
    },
    occupation:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    ethincity:{
        type:String,
        minlength:3,
        maxlength:40,
        required:true
    },
    religion:{
        type:String,
        minlength:1,
        maxlength:40,
        required:true
    },
    maritalStatus:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    pLanguage:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    sLanguage:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    }})
    const contactInfo = new mongoose.Schema({
    address:{
        type:String,
        minlength:5,
        maxlength:500,
        required:true
    },
    village:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    zone:{
        type:String,
    
        required:true
    },
    subZone:{
        type:String,
     
        required:true
    },
    homeNumber:{
        type:String,
      
        required:true
    },
    phoneNumber:{
        type:String,
      
        required:true
    },
    email:{
        type:String,
      
        required:true
    },
})

const emergencyContact = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3,
        maxlength:40
    },
    fatherName:{
        type: String,
        required: true,
        minlength:3,
        maxlength:40
    },
    grandFatherName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    },
    address:{
        type:String,
        minlength:5,
        maxlength:500,
        required:true
    },
    village:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    zone:{
        type:String,
     
        required:true
    },
    subZone:{
        type:String,
     
        required:true
    },
    date:{
        type: Date,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    relationship:{
        type:String,
        required:true
    },
    homeNumber:{
        type:String,
        minlength:7,
        maxlength:20,
        required:true
    },
    mobileNumber:{
        type:String,
       
        required:true
    },
    emailAddress:{
        type:String,
        minlength:7,
        maxlength:100,
        required:true
    }
})

const patientSchema = new mongoose.Schema({
    UHID:{
        type:Number,
        required:true
    },
    basicInformation:basicInfo,
    contactInformation:contactInfo,
    emergencyContactDetails:emergencyContact
})

const Patient = mongoose.model("Patients",patientSchema)

exports.Patient = Patient