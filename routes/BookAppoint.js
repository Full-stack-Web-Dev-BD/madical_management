const {BookingAppointed} = require('../model/BookAppoint')

const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>
{
        const PatientsData =await  BookingAppointed.find();
        console.log(PatientsData)
        res.send(PatientsData);
})

    

router.get('/:UHID',async(req,res)=>
{
        console.log("Hello")
        console.log(req.params.UHID)
        console.log("Hello")
        var s = parseInt(req.params.UHID)
        const PatientsData =await  BookingAppointed.findOne({'info.UHID':s});
        console.log(PatientsData)
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
        appointment = new BookingAppointed({
        info:req.body.info,
        pType:req.body.pType,
        service:req.body.service
        })
        await appointment.save()
        res.send(appointment)

})

module.exports = router 
