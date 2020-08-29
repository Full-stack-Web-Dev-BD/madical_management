const mongoose=require('mongoose')
const Schema=mongoose.Schema

const  invoiceSchema=new Schema({
    
    info: Object,
    pType: String,
    service: Array,
    UHID: Number,
    invoiceID: Number,
    total: Number,
    paid: Number,
    dueDate: String
})
const invoiceModel=mongoose.model('invoiceModel',invoiceSchema)
module.exports=invoiceModel
