const {Asmara} = require('../model/asmara')

const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
        const PatientsData =await  Asmara.find();
        console.log(PatientsData)
        res.send(PatientsData);
})

router.post('/',async(req,res)=>
{
        console.log(req.body)
      asmara = new Asmara({
          PatientUHID:req.body.PatientUHID,
        date:req.body.date,
        ref:req.body.ref,
        ownerName:req.body.ownerName,
        address:req.body.address,
        tel:req.body.tel,
        referenceNo:req.body.referenceNo,
        typeMaterial:req.body.typeMaterial,
        totalAmount:req.body.totalAmount,
        amountTaken:req.body.amountTaken,
        samplingDate:req.body.samplingDate,
        time:req.body.time,
        sampleTaken:req.body.sampleTaken,
        RequiredAnalysis:req.body.requiredAnalysis,
        sampleBy:req.body.sampleBy,
        profession:req.body.profession,
        signature:req.body.signature,
        professionalOpinion:req.body.professionalOpinion
        })
        await asmara.save()
        res.send(asmara)

})

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
    let user = await Patient.findOne({UHID:r})
    if(!user) return r
    else  return (r + 1)

}
module.exports = router 