const {chemistry} = require('../model/chemistry')

const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
    const hematologyData =await chemistry.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/:RequestID',async(req,res)=>
{
    console.log(req.params.RequestID)
    const hematologyData =await chemistry.findOne({RequestID:Number(req.params.RequestID)});
    console.log(hematologyData)
    res.send(hematologyData);
})
router.get('/doc/:SID',async(req,res)=>
{
  console.log(req.params.SID)
    const hematologyData =await chemistry.find();
    console.log(hematologyData)
    res.send(hematologyData);
})
router.post('/',async(req,res)=>
{
      RHID = await generateUHID()
        console.log(req.body)
      Chemistry = new chemistry({
        RequestID:RHID,
        PatientUHID:req.body.PatientUHID,
            firstName:req.body.firstName,
            status:"pending",
            nationalIdNumber:req.body.nationalIdNumber,
            dateOfBirth:req.body.dateOfBirth,
            sex:req.body.sex,
            priority:req.body.priority,
            department:req.body.department,
            DoctorID:req.body.DoctorID,
            patientZopaSub:req.body.patientZopaSub,
            hospital:req.body.hospital,
            ward:req.body.ward,
            test:req.body.test,
            bedNo:req.body.bedNo,
            paymentPC:req.body.PaymentPC,
            paymentPR:req.body.PaymentPR,
            referralDate:req.body.referralDate,
            dateCollected:req.body.dateCollected,
            collectorInitial:req.body.collectorInitial,
            PatientSurvey:req.body.PatientSurvey,
            PatientFree:req.body.PatientFree,
            physicianName:req.body.physicianName,
            signature:req.body.signature,
            opdReceiptNo:req.body.opdReceiptNo,
            priority:req.body.priority,
            department:req.body.department,
            doctorID:req.body.doctorID,
        chemistryData:req.body.chemistryData,
        HaemotologyData:req.body.HaemotologyData,
        ImmunoHaematol:req.body.ImmunoHaematol,
        MicroBiology:req.body.MicroBiology,
        Immunoserology:req.body.Immunoserology,
        TherapeuticDrugs:req.body.TherapeuticDrugs
       
        })
        await Chemistry.save()
        res.send(Chemistry)

})


router.put('/:RequestID',async(req,res)=>{
    console.log(req.params.RequestID)
    
      var hematology = await chemistry.update({RequestID:req.params.RequestID},{
        $set:{
          status:"completed",
          chemistryData:req.body.chemistryData,
          HaemotologyData:req.body.HaemotologyData,
          ImmunoHaematol:req.body.ImmunoHaematol,
          MicroBiology:req.body.MicroBiology,
          Immunoserology:req.body.Immunoserology,
          TherapeuticDrugs:req.body.TherapeuticDrugs 
        }
      })
      console.log(hematology)
      res.send(hematology)
   
  })

const generateUHID=async()=>
{
    
    var r = Math.floor(Math.random() * 1000) + 1;
   return (r + 1)

}
module.exports = router 