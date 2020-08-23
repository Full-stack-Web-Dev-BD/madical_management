const Joi = require('joi')

const mongoose = require('mongoose')

const result = mongoose.Schema({
    resultWBC:{
        type:String,
    
    },
    resultRBC:{
        type:String,
        
    },
    resultHGB:{
        type:String,
  
    },
    resultHCT:{
        type:String,

    },
    mcvResult:{
        type:String,
    
    },
    mchResult:{
        type:String,
       
    },
    mchcResult:{
        type:String,
      
    },
    esrResult:{
        type:String,
     
    },
    retcResult:{
        type:String,
       
    },
    pltResult:{
        type:String,
    },
    bltResult:{
        type:String
    },
    cltTime:{
        type:String
    },
    ptSecResult:{
        type:String
    },
    ptInrResult:{
        type:String
    },
    pttSecResult:{
        type:String
    },
    diffResult:{
        type:String
    },
    neutrophilSegResult:{
        type:String
    },
    neutrophilBandResult:{
        type:String
    },
    lymphocyteResult:{
        type:String
    },
    monocyteResult:{
        type:String
    },
    eosinophilResult:{
        type:String
    },
    basophilResult:{
        type:String
    },
    hemoParasite:{
        type:String
    },
    cellMorphology:{
        type:String
    },
    other:{
        type:String
    }
})
const hematology = mongoose.Schema({
    RequestID:{
        type:Number
    },
    PatientUHID:{
        type:Number,
        required:true
    },
    test:{
        type:String
    },
    signature:{
        type:String,
        required:true
    },
    referralDate:{
        type:Date,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    grandFatherName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    birthDate:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    status:{
        type:String,
        
    },
    ward:{
        type:String,
        required:true
    },
    bedNo:{
        type:String,
        required:true
    },
    referringNo:{
        type:String,
    
    },
    priority:{
        type:String
    },
    department:{
        type:String
    },
    DoctorID:{
        type:Number
    },
    Results:result

})

const Hematology = mongoose.model("Hematology",hematology)

exports.Hematology = Hematology