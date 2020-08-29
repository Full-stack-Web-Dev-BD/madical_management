const patientModel = require('../model/patientModel')
const appointModel = require('../model/appointModel')
const invoiceModel = require('../model/invoiceModel')
module.exports = {
    addPatient(req, res) {

        function getRandom(length) {
            return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
        }
        let randID = getRandom(8)
        new patientModel({
            patientInfo: req.body,
            UHID: parseInt(randID)
        })
            .save()
            .then(doc => {
                return res.status(200).json({ massage: 'Patient Added' })
            })
            .catch(err => {
                return res.status(500).json({ massage: 'Server error ' })
            })
    },
    getAllPatient(req, res) {
        patientModel.find()
            .then(patients => {
                res.status(200).json(patients)
            })
            .catch(err => {
                return res.status(500).json({ massage: 'Server error ' })
            })
    },
    findPatient(req, res) {
        patientModel.find({ UHID: req.params.id })
            .then(patient => {
                if (patient.length !== 0) {
                    res.status(200).json(patient[0].patientInfo)
                } else {
                    res.status(200).json({ massage: "Patient Not Found" })
                }
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ massage: 'Server error ' })
            })
    },
    bookAppoint(req, res) {
        new appointModel({
            UHID: req.body.UHID,
            patientInformation: req.body.patientInformation,
            SID: req.body.SID,
            appointmentDate: req.body.appointmentDate,
            priority: req.body.priority,
            time: req.body.time,
        }).save()
            .then(doc => {
                return res.status(200).json({ massage: "Appoint Book Successfull " })
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ massage: "Server error occurd  !" })
            })
    },
    getAllAppoinment(req, res) {
        appointModel.find()
            .then(appoint => {
                res.status(200).json(appoint)
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ massage: 'Server error ' })
            })
    },
    makeInvoice(req, res) {
        new invoiceModel({
            info: req.body.info,
            pType: req.body.pType,
            service:req.body.service,
            UHID:parseInt( req.body.UHID),
            invoiceID: parseInt(req.body.invoiceID),
            total: parseInt(req.body.total),
            paid: parseInt(req.body.paid),
            dueDate: req.body.dueDate
        })
        .save()
        .then(doc=>{
            console.log('Invoice created !')
            res.status(200).json({massage:"Invoice Created Successfull"})
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({massage:"Server error occurd"})
        })
    },
    getAllInvoice(req,res){
        invoiceModel.find()
        .then(invoice=>{
            res.status(200).json(invoice)
        })
        .catch(err=>{
            res.status(500).json({massage:"Server error occurd "})
        })
    }
}
