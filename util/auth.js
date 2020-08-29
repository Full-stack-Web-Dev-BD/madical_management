const jwt = require('jsonwebtoken')
const { TOKEN_SECRET_KAY } = require('./config')
const adminModel = require('../model/adminModel')
const staffModel = require('../model/staffModel')
module.exports = {
    adminAuthenticate(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            return res.status(403).json({ massage: "You have no access !" })
        }
        jwt.verify(token, TOKEN_SECRET_KAY, (err, user) => {
            if (err) {
                console.log(err)
                return res.status(403).json({ massage: 'You are not valid user ' })
            }
            adminModel.find({ email: user.email })
                .then(dbUser => {
                    if (dbUser.length === 0) {
                        staffModel.find({ ID: user.email })
                            .then(staff => {
                                console.log(user)
                                if (staff.length === 0) {
                                    return res.status(403).json({ massage: "You have no access ( not exist)!!" })
                                }
                                if (user.type === staff[0].type) {
                                    return res.status(200).json({ massage: "You are authenticated !!", user: dbUser[0] })
                                } else {
                                    return res.status(403).json({ massage: "You have no access !!" })
                                }
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({ massage: 'Server error occurd !' })
                            })
                    } else {
                        if (dbUser[0].type === user.type) {
                            return res.status(200).json({ massage: "You are authenticated !!", user: dbUser[0] })
                        } else {
                            res.status(403).json({ massage: "You hav eno access" })
                        }
                    }
                })
                .catch(err => {
                    res.status(500).json({ massage: "Server Error" })
                })
        })
    }
}


