const {Staff} = require('../model/staffData')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();


router.post('/',async(req,res)=>
{
        console.log(req.body)
        sid = await generateUHID();
        staff = new Staff({
            SID:sid,
            staffInformation:req.body.staff,
            basicInformation:req.body.basic,
            contactInformation:req.body.contact,
            highLevelInformation:req.body.highLevel,
            workStatusInformation:req.body.workStatus,
            specialTrainingInformation:req.body.specialTraining,
            workExperienceInformation:req.body.workExperience,
            languageProficiencyInformation:req.body.languageProficiency,
            childrenListInformation:req.body.childrenList,
            emergencyContactInformation:req.body.emergencyContact
        })
        console.log(staff)
        await staff.save()
        res.send(req.body)

})

router.get('/',async(req,res)=>
{
    
    console.log("Hello")
        const staff = await Staff.find()
        
        res.send(staff);
})

router.get('/:email',async(req,res)=>
{
    
    console.log(typeof(req.params.email))
    console.log(req.params.email)
    const staff = await Staff.findOne({'contactInformation.email':req.params.email})
    console.log(staff)
    res.send(staff)
})


router.get('/doc/:SID',async(req,res)=>
{
      
        console.log(req.params.SID)
        var sd = parseInt(req.params.SID)
        console.log(typeof(req.params.SID))
        console.log("Hellosas")
        const staff = await Staff.findOne({SID:req.params.SID})
       try{
        res.send(staff)
        }
        catch{
        console.log(staff)
        }
       
})


const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
    let user = await Staff.findOne({SID:r})
    if(!user) return r
    else  return (r + 1)

}
module.exports = router 