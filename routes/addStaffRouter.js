const adminRouter=require('express').Router()
const adminController=require('../controller/adminController')
const {adminAuthenticate}=require('../util/auth')




adminRouter.post('/admin-register',adminController.adminRegister)
adminRouter.post('/admin-login',adminController.adminLogin)
adminRouter.post('/get-permissoin',adminAuthenticate)
adminRouter.get('/get-admin-data',adminController.adminInitialData)


module.exports=adminRouter


// +3630327033
// +36303827033
// OK
// 36303827033

