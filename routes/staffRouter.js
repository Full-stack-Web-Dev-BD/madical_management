const staffRoute=require('express').Router()
const staffController=require('../controller/staffController')


// patient
    staffRoute.post('/add-patient',staffController.addPatient)
    staffRoute.get('/get-patients',staffController.getAllPatient)
    staffRoute.get('/get-single-patient/:id',staffController.findPatient)
// book appoint
    staffRoute.post('/book-appoint',staffController.bookAppoint)
    staffRoute.get('/get-appoints',staffController.getAllAppoinment)
    staffRoute.post('/create-invoice',staffController.makeInvoice)
    staffRoute.get('/get-all-invoice',staffController.getAllInvoice)




module.exports=staffRoute
