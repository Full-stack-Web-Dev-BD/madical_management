const {Hematology} = require('../model/hematology')

const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
    const hematologyData =await Hematology.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/doc/:SID',async(req,res)=>
{
    console.log(req.params.SID)
    const hematologyData =await Hematology.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/:RequestID',async(req,res)=>
{
  console.log("ASsad")
  console.log(typeof(parseInt(req.params.RequestID))); 
    const hematologyData =await Hematology.findOne({RequestID:Number(req.params.RequestID)});
    console.log(hematologyData)
    res.send(hematologyData);
})
router.put('/:RequestID',async(req,res)=>{
  console.log(req.params.RequestID)
  
    var hematology = await Hematology.update({RequestID:req.params.RequestID},{
      $set:{
        status:"completed",
        Results:req.body.results
      }
    })
    console.log(hematology)
    res.send(hematology)
 
})
router.post('/',async(req,res)=>
{
      RHID = await generateUHID()
        console.log(req.body)
      hematology = new Hematology({
           RequestID:RHID,
        PatientUHID:req.body.PatientUHID,
        test:req.body.test,
        signature:req.body.signature,
        referralDate:req.body.referralDate,
        firstName:req.body.firstName,
        fatherName:req.body.fatherName,
        grandFatherName:req.body.grandFatherName,
        DoctorID:req.body.DoctorID,
        age:req.body.age,
        birthDate:req.body.birthDate,
        gender:req.body.gender,
        bloodGroup:req.body.bloodGroup,
        status:"pending",
        ward:req.body.ward,
        bedNo:req.body.bedNo,
        referringNo:req.body.referringNo,
        priority:req.body.priority,
        department:req.body.department,
        doctorID:req.body.doctorID,
        Results:req.body.result,
       
        })
        await hematology.save()
        res.send(hematology)

})

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
    let user = await Hematology.findOne({RequestID:r})
    if(!user) return r
    else  return (r + 1)

}
module.exports = router 