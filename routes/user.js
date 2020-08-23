const {User, validate} = require('../model/user')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/:email',async(req,res)=>
{
    
    console.log(req.params.email)
    const staff = await User.findOne({email:req.params.email})
    console.log(staff)
    res.send(staff)
})

router.post("/",async(req,res)=>
{
  console.log(req.body)
  
    let user = await User.findOne({email:req.body.email})

    if (user) return res.status(404).send("User already taken")
  
    pass = await generatePassword();
    console.log(pass)
    new User({
        type: req.body.type,
        name: req.body.name,
        email:req.body.email,
        password: pass
    })
    .save()
    .then(user=>{
      console.log(user)
      res.status(200).json(user)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({message:"server error "})
    })
});

const generatePassword=async()=>
{
    
    var r = Math.floor(Math.random() * 100000000) + 1;
     return r

}

module.exports = router 