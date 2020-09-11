const allValidator = require('../validator/allValidator')
const adminModel = require("../model/adminModel")
const staffModel = require('../model/staffModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET_KAY } = require('../util/config')
const staffMOdel = require('../model/staffModel')


module.exports = {
    adminRegister(req, res) {
        let verify = allValidator.adminRegisterValidator(req)
        if (!verify.isvalid) {
            res.status(400).json(verify.err)
        }
        adminModel.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(400).json({ massage: "User  existing" })
                }
                bcrypt.hash(req.body.password, 13, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ massage: "Eerver Error" })
                    }
                    new adminModel({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        type: req.body.type
                    }).save()
                        .then(user => {
                            console.log(user, 'registered')
                            res.status(200).json({ massage: "Registered Success !" })
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).json({ massage: 'Server error occurd !' })
                        })
                })
            })
    },
    adminLogin(req, res) {
        let verify = allValidator.adminLoginValidator(req)
        if (!verify.isvalid) {
            return res.status(400).json(verify.err)
        }
        adminModel.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    staffModel.find({ ID: req.body.email })
                        .then(staff => {
                            if (staff.length === 0) {
                                return res.status(403).json({ massage: "User not find !" })
                            }
                            if (req.body.password !== staff[0].password) {
                                return res.status(404).json({ massage: "Wrong Password Provided !!" })
                            }

                            let token = jwt.sign(
                                {
                                    name: staff[0]._id,
                                    type: staff[0].type,
                                    email: staff[0].ID
                                },
                                TOKEN_SECRET_KAY,
                                {
                                    expiresIn: '4h'
                                }
                            )
                            return res.status(200).json({ token: `Bearer ` + token })
                        })
                        .catch(err => {
                            console.log(err)
                            return res.status(500).json({ massage: 'Server error occurd !' })
                        })
                } else {
                    bcrypt.compare(req.body.password, user.password, (err, success) => {
                        if (err) {
                            return res.status(500).json({ massage: "Server error occurd " })
                        }
                        if (!success) {
                            return res.status(400).json({ massage: "Password did not match !" })
                        }
                        let token = jwt.sign(
                            {
                                name: user.name,
                                email: user.email,
                                type: user.type
                            },
                            TOKEN_SECRET_KAY,
                            {
                                expiresIn: '4h'
                            }
                        )
                        res.status(200).json({ token: `Bearer ` + token })
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: 'Server error ' })
            })
    },
    addStaff(req, res) {

        function getRandom(length) {
            return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
        }
        let randID = getRandom(6)
        let randPassword = getRandom(6).toString()
        new staffModel({
            ID: parseInt(randID),
            password: randPassword,
            allInformation: req.body,
            type: req.body.staff.staffType
        }).save()
            .then(doc => {
                console.log("Stff added")
                res.status(200).json({ massage: "Staff Added" })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: "Server error occurd" })
            })
    },
    adminInitialData(req, res) {
        staffModel.find()
            .then(doctors => {
                let filterDoctors = doctors.filter(single => single.allInformation[0].staff.staffType == 'Doctor')
                res.status(200).json(filterDoctors)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ massage: "Server error occurd" })
            })
    }
}