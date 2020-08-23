const {HBLViral} = require('../model/hblViral')

const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
    const hematologyData =await HBLViral.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/doc/:SID',async(req,res)=>
{
    console.log(req.params.SID)
    const hematologyData =await HBLViral.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/:RequestID',async(req,res)=>
{
  console.log("ASsad")
  console.log(req.params.RequestID); 
    const hematologyData =await HBLViral.findOne({RequestID:Number(req.params.RequestID)});
    console.log(hematologyData)
    res.send(hematologyData);
})
router.put('/:RequestID',async(req,res)=>{
  console.log(req.params.RequestID)
  
    var hematology = await HBLViral.update({RequestID:req.params.RequestID},{
      $set:{
        status:"completed",
        result1:req.body.result1,
        result2:req.body.result2
      }
    })
    console.log(hematology)
    res.send(hematology)
 
})
router.post('/',async(req,res)=>
{
    console.log("inss")
      RHID = await generateUHID()
        console.log(req.body)
      hcvViral = new HBLViral({
        RequestID:RHID,
        PatientUHID:req.body.PatientUHID,
        priority:req.body.priority,
        department:req.body.department,
        DoctorID:req.body.DoctorID,
        firstName:req.body.firstName,
        status:'pending',
        test:'HBLViral',
        nationalIdNumber:req.body.nationalIdNumber,
        dateOfBirth:req.body.dateOfBirth,
        healthFacility:req.body.healthFacility,
        zoba:req.body.zoba,
        subZoba:req.body.subZoba,
        villCity:req.body.villCity,
        requestedBy:req.body.requestedBy,
        tele:req.body.tele,
        specimenDate:req.body.specimenDate,
        NHLDate:req.body.NHLDate,
        goodCondition:req.body.goodCondition,
        inadequateCondition:req.body.inadequateCondition,
        result1:req.body.result1,
        result2:req.body.result2,
        reportBy:req.body.reportBy,
        referralDate:req.body.referralDate,
        reportSig:req.body.reportSig,
        approveBy:req.body.approveBy,
        approveDate:req.body.approveDate,
        approveSig:req.body.approveSig
  })
        await hcvViral.save()
        res.send(hcvViral)

})

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
     return r 

}
module.exports = router 