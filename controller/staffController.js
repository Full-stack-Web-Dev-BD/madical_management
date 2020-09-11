const patientModel = require('../model/patientModel')
const appointModel = require('../model/appointModel')
const invoiceModel = require('../model/invoiceModel')
const testRequestModel = require('../model/testRequestModel')

module.exports = {
    addPatient(req, res) {

        function getRandom(length) {
            return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
        }
        let randID = getRandom(8)
        new patientModel({
            patientInfo: req.body,
            UHID: parseInt(randID),
            request: 0,
            accept: false
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
    findPatientTomakeInvoice(req, res) {
        invoiceModel.find({ UHID: req.params.id })
            .then(invoice => {
                if (invoice.length === 0) {
                    patientModel.find({ UHID: req.params.id })
                        .then(patient => {
                            if (patient.length !== 0) {
                                res.status(200).json(patient[0].patientInfo)
                            } else {
                                res.status(404).json({ massage: "Patient Not Found" })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            return res.status(500).json({ massage: 'Server error ' })
                        })
                } else {
                    return res.status(403).json({ message: "Invoice Existing !!!" })
                }
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
            service: req.body.service,
            UHID: parseInt(req.body.UHID),
            invoiceID: parseInt(req.body.invoiceID),
            total: parseInt(req.body.total),
            paid: parseInt(req.body.paid),
            dueDate: req.body.dueDate
        })
            .save()
            .then(doc => {
                console.log('Invoice created !')
                res.status(200).json({ massage: "Invoice Created Successfull" })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: "Server error occurd" })
            })
    },
    getAllInvoice(req, res) {
        invoiceModel.find()
            .then(invoice => {
                res.status(200).json(invoice)
            })
            .catch(err => {
                res.status(500).json({ massage: "Server error occurd " })
            })
    },
    makeRequest(req, res) {
        console.log(req.body)
        let uhid = parseInt(req.body.PatientUHID)
        patientModel.findOne({ UHID: uhid })
            .then(patient => {
                if(patient){
                    console.log('patient founded',patient.request)
                patient.request = req.body.requester
                patient.save()
                    .then(doc => {
                        new testRequestModel({
                            requester: req.body.requester,
                            patient: uhid,
                            testInfo: req.body.testInfo,
                            type: req.body.type,
                            status: 'pending'
                        })
                            .save()
                            .then(test => {
                                console.log('test added')
                                console.log(test)
                                res.status(200).json({ massage: "Request success" })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({ massage: "server error " })
                            })
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ massage: "server error " })
                    })
                }else{
                    console.log('patient not  founded')
                    res.status(500).json({ massage: "server error " })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: "server error " })
            })
    },
    doAccept(req, res) {
        patientModel.findOne({ UHID: req.params.id })
            .then(patient => {
                patient.accept = true
                patient.save()
                    .then(doc => {
                        console.log('Requested ')
                        res.status(200).json({ massage: "Request success" })
                    })
                    .catch(err => {
                        res.status(500).json({ massage: "server error " })
                    })
            })
            .catch(err => {
                res.status(500).json({ massage: "server error " })
            })
    },
    getAllRequest(req, res) {
        testRequestModel.find()
            .then(test => {
                return res.status(200).json(test)
            })
            .catch(err => {
                res.status(500).json({ massage: "server error " })
            })
    },
    findTest(req, res) {
        testRequestModel.findOne({ _id: req.params.id })
            .then(test => {
                console.log(test)
                res.status(200).json(test)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: "server error" })
            })
    },
    submitResult(req, res) {
        testRequestModel.findOne({ _id: req.body.id })
            .then(test => {
                if (test) {
                    console.log(test)
                    test.testInfo = req.body.testInfo
                    test.status = 'submitted'
                    test.save()
                        .then(updatedTest => {
                            console.log('submitted success')
                            res.status(200).json({ massage: "Submitted success" })
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).json({ massage: "server error" })
                        })
                } else {
                    console.log('not found')
                }
            })
    }
}
