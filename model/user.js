const Joi = require('joi')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    SID:{
        type:Number
    },
    name:{
        type: String,
        required: true,
        minlength:3,
        maxlength:40
    },
    email:
    {
        type:String,
        required:true,
        minlength:5,
        maxlength:240,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:302
    }
})

userSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ SID: this.SID,type: this.type,user:this.user,email:this.email }, 'Laboratory');
    return token;
  }
  const User = mongoose.model('users',userSchema)
function validateUser(user)
{
    const schema = {
        type:Joi.string().required(),
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().min(3).max(240).required().email(),
        password:Joi.string().min(5).max(302).required()
    }
    return Joi.validate(user,schema)
}

exports.User = User
exports.validate = validateUser