const {Patient} = require('../model/PatientData')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();

router.get('/',async(req,res)=>
{
        const PatientsData =await  Patient.find();
        console.log(PatientsData)
        res.send(PatientsData);
})

router.get('/:UHID',async(req,res)=>
{
        console.log("Hello")
        console.log(req.params.UHID)
        console.log("Hello")
        const PatientsData =await  Patient.findOne({UHID:req.params.UHID});
        try{
        res.send(PatientsData)
        }
        catch{
        console.log(PatientsData)
        }
       })

router.post('/',async(req,res)=>
{
        console.log(req.body)
        uhid = await generateUHID();
       
        patient = new Patient({
            UHID: uhid,
    basicInformation : req.body.basic,
    contactInformation:req.body.contact,
    emergencyContactDetails: req.body.emergency
        })
        await patient.save()
        res.send(req.body)

})

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
    let user = await Patient.findOne({UHID:r})
    if(!user) return r
    else  return (r + 1)

}
module.exports = router 