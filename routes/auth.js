const Joi = require('joi');
const bcrypt = require('bcrypt');

const {User} = require('../model/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
router.post("/",async(req,res)=>
{
       
   const {error} = validate(req.body)
   if (error) return res.status(400).send(error.details[0].message)


    let muser = await User.findOne({email:req.body.email});
   if (!muser) return res.status(400).send('Invalid email or password.');

  
  const token = muser.generateAuthToken();
  res.send(token    );

});
function validate(req)
{
    const schema={
        email: Joi.string().min(5).max(240).required().email(),
        password:Joi.string().min(6).max(302).required()
    }
    return Joi.validate(req,schema)
}
module.exports = router 