const {CultureData} = require('../model/culture')

const express = require('express')

const router = express.Router()


router.get('/',async(req,res)=>
{
    const hematologyData =await CultureData.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/:RequestID',async(req,res)=>
{
    console.log(req.params.RequestID)
    const hematologyData =await CultureData.findOne({RequestID:Number(req.params.RequestID)});
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/doc/:SID',async(req,res)=>
{
  console.log(req.params.SID)
    const hematologyData =await CultureData.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.post('/',async(req,res)=>
{
      RHID = await generateUHID()
        console.log(req.body)
      culture = new CultureData({
        RequestID:RHID,
        PatientUHID:req.body.PatientUHID,
        firstName:req.body.firstName,
        referralDate:req.body.referralDate,
        nationalIdNumber:req.body.nationalIdNumber,
        age:req.body.age,
        status:'pending',
        test:req.body.test,
        sex:req.body.sex,
        location:req.body.PatientUHID,
        OPD_Ward:req.body.OPD_Ward,
        physician_name:req.body.physician_name,
        sample_type:req.body.sample_type,
        test_requested:req.body.test_requested,
        isolate1:req.body.isolate1,
        isolate2:req.body.isolate2,
        isolate:req.body.isolate,
        blnk1:req.body.blnk1,
        blnk2:req.body.blnk2,
        blnk3:req.body.blnk3,
        blnk4:req.body.blnk4,
        blnk5:req.body.blnk5,
        blnk6:req.body.blnk6,
        blnk7:req.body.blnk7,
        blnk8:req.body.blnk8,
        blnk9:req.body.blnk9,
        blnk10:req.body.blnk10,
        blnk11:req.body.blnk11,
        blnk12:req.body.blnk12,
        blnk13:req.body.blnk13,
        blnk14:req.body.blnk14,
        blnk15:req.body.blnk15,
        blnk16:req.body.blnk16,
        blnk17:req.body.blnk17,
        blnk18:req.body.blnk18,
        blnk19:req.body.blnk19,
        blnk20:req.body.blnk20,
        CI:req.body.CI,
        CH1:req.body.CH1,
        CO:req.body.CO,
        CL:req.body.CL,
        EY:req.body.EV,
        GE:req.body.GE,
        OX:req.body.OX,
        NI:req.body.NI,
        PN :req.body.PN,
        VA :req.body.VA,
        blnk21:req.body.blnk21,
        blnk22:req.body.blnk22,
        blnk23:req.body.blnk23,
        blnk24:req.body.blnk24,
        CH2:req.body.CH2,
        TE:req.body.TE,
        RB:req.body.RB,
        DT1:req.body.DT1,
        DT2:req.body.DT2,
        SG1:req.body.SG1,
        SG2:req.body.SG2,
        priority:req.body.priority,
        department:req.body.department,
        DoctorID:req.body.DoctorID,
        dateOfBirth:req.body.dateOfBirth
        
      })
      await culture.save()
      console.log(culture)
      res.send(culture)
   
  })

  
router.put('/:RequestID',async(req,res)=>{
  console.log(req.params.RequestID)
  
    var hematology = await CultureData.update({RequestID:req.params.RequestID},{
      $set:{
        status:"completed",
        isolate1: req.body.isolate1,
        isolate2:req.body.isolate2,
        isolate:req.body.isolate,
        blnk1:req.body.blnk1,
        blnk2:req.body.blnk2,
        blnk3:req.body.blnk3,
        blnk4:req.body.blnk4,
        blnk5:req.body.blnk5,
        blnk6:req.body.blnk6,
        blnk7:req.body.blnk7,
        blnk8:req.body.blnk8,
        blnk9:req.body.blnk9,
        blnk10:req.body.blnk10,
        blnk11:req.body.blnk11,
        blnk12:req.body.blnk12,
        blnk13:req.body.blnk13,
        blnk14:req.body.blnk14,
        blnk15:req.body.blnk15,
        blnk16:req.body.blnk16,
        blnk17:req.body.blnk17,
        blnk18:req.body.blnk18,
        blnk19:req.body.blnk19,
        blnk20:req.body.blnk20,
        CI:req.body.CI,
        CH1:req.body.CH1,
        CO:req.body.CO,
        CL:req.body.CL,
        EY:req.body.EY,
        GE:req.body.GE,
        OX:req.body.OX,
        NI:req.body.NI,
        PN :req.body.PN,
        VA :req.body.VA,
        blnk21:req.body.blnk21,
        blnk22:req.body.blnk22,
        blnk23:req.body.blnk23,
        blnk24:req.body.blnk24,
        CH2:req.body.CH2,
  
      }
    })
    console.log(hematology)
    res.send(hematology)
 
})

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000000) + 1;
   return (r + 1)

}
module.exports = router 