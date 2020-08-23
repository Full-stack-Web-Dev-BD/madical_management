const Joi = require('joi')

const mongoose = require('mongoose')
const requiredAnalysis = mongoose.Schema
[{
        codeNo: {
            type: String,
            required: true
        },
        microBiological: {
            type: Boolean,
        },
        physicoChemical: {
            type: Boolean,
        }
    }]
const asmara = mongoose.Schema({
    PatientUHID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    ref: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    referenceNo: {
        type: String,
        required: true
    },
    typeMaterial: {
        type: String,
        required: true
    },
    totalAmount: {
        type: String,
        required: true
    },
    amountTaken: {
        type: String,

    },
    samplingDate: {
        type: Date,

    },
    time: {
        type: String,

    },
    sampleTaken: {
        type: String,

    },
    RequiredAnalysis: [{}],
    sampleBy: {
        type: String,

    },
    profession: {
        type: String,

    },
    signature: {
        type: String,

    },
    professionalOpinion: {
        type: String,

    }

})


const Asmara = mongoose.model("Asmara", asmara)

exports.Asmara = Asmara
