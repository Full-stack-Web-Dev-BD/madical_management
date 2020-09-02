const staffRoute=require('express').Router()
const staffController=require('../controller/staffController')


// patient
    staffRoute.post('/add-patient',staffController.addPatient)
    staffRoute.get('/get-patients',staffController.getAllPatient)
    staffRoute.get('/get-single-patient/:id',staffController.findPatient)
    staffRoute.get('/get-patient-for-invoice/:id',staffController.findPatientTomakeInvoice)
// book appoint
    staffRoute.post('/book-appoint',staffController.bookAppoint)
    staffRoute.get('/get-appoints',staffController.getAllAppoinment)
    staffRoute.post('/create-invoice',staffController.makeInvoice)
    staffRoute.get('/get-all-invoice',staffController.getAllInvoice)
    staffRoute.post('/make-request',staffController.makeRequest)
    staffRoute.post('/do-accept/:id',staffController.doAccept)


module.exports=staffRoute
