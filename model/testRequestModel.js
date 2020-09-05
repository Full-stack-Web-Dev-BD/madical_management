const mongoose=require('mongoose')
const Schema=mongoose.Schema

const  testRequestScema=new Schema({
    requester: Number,
    patient: Number,
    testInfo: Array,
    type: String,
    status:String
})
const testRequestModel=mongoose.model('testRequestModel',testRequestScema)
module.exports=testRequestModel