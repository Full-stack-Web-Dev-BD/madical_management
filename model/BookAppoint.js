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
const appointInfo = mongoose.Schema({
    Dname:{
        type:String
    },
    Department:{
        type:String
    },
    PGender:{
        type:String
    },
    PName:{
        type:String
    },
    SID:{
        type:String
    },
    UHID:{
        type:String
    },
    appointmentDate:{
        type:Date
    },
    basicInformation:basicInfo,
    priority:{
        type:String
    },
    time:{
        type:String
    }

})

const BookingAppointment = new mongoose.Schema({
    info:appointInfo,
    pType:{
        type:String
    },
    service: [{
        amount:{
            type:Number,
            required:true
        },
        item:{
            type:String,
           
        },
        quantity:{
            type:Number,
        },
        rate:{
            type:Number
        }
        }]
})

const BookingAppointed = mongoose.model("BookingAppointment",BookingAppointment)

exports.BookingAppointed = BookingAppointed