const userRoute = require('express').Router()
const {createUser,readallUser,readsingleUser,updateUser,deleteUser,defaultCtrl}= require('../controller/userController')

//new user -> post route
userRoute.post(`/api/user/add`, createUser)

//read all -> get
userRoute.get(`/api/user/all`, readallUser)
//read single -> get
userRoute.get(`/api/user/single/:id`, readsingleUser)
//update user -> put/patch
userRoute.patch(`/api/user/update/:id`, updateUser)
//delete user -> delete
userRoute.delete(`/api/user/delete/:id`, deleteUser)


userRoute.all(`*`,defaultCtrl)

module.exports = userRoute