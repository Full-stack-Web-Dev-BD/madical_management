const {TBReport} = require('../model/tbReport')

const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
    const hematology =await TBReport.find();
    console.log(req.body)
    res.send(hematology);
})
router.get('/doc/:SID',async(req,res)=>
{
    console.log(req.params.SID)
    const hematology  =await TBReport.find();
    console.log(hematology)
    res.send(hematology);
})
router.get('/:RequestID',async(req,res)=>
{
  console.log("ASsad")
  console.log(req.params.RequestID); 
    const hematology =await TBReport.findOne({RequestID:Number(req.params.RequestID)});
  
    res.send(hematology);
})
router.put('/:RequestID',async(req,res)=>{
  console.log(req.params.RequestID)
  
    var hematology = await TBReport.update({RequestID:req.params.RequestID},{
      $set:{
        status:"completed",
        DST:req.body.DST,
        result:req.body.result
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
        hcvViral = new TBReport({
        RequestID:RHID,
        PatientUHID:req.body.PatientUHID,
        priority:req.body.priority,
        department:req.body.department,
        status:"pending",
        nationalIdNumber:req.body.nationalIdNumber,
        test:req.body.test,
        DoctorID:req.body.DoctorID,
        firstName:req.body.firstName,
        sex:req.body.sex,
        dateOfBirth:req.body.dateOfBirth,
        eritreanID:req.body.eritreanID,
        address:req.body.address,
        labSerial:req.body.labSerial,
        round:req.body.round,
        facultyName:req.body.facultyName,
        doctorName:req.body.doctorName,
        referralDate:req.body.referralDate,
        mgitCulture:req.body.mgitCulture,
        mgitMicroscopy:req.body.mgitMicroscopy,
        ljCulture:req.body.ljCulture,
        geneXpertRapidTest:req.body.geneXpertRapidTest,
        DST:req.body.DST,
        result:req.body.result,
        comments:req.body.comments,
        reportedBy:req.body.reportedBy,
        recievedBy:req.body.recievedBy
     
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