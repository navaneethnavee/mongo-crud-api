const User = require('../model/user')

//create user
const createUser = async(req,res) => {
    try {
        //read the incoming from data
        let data=req.body

        //validate the email and mobile


        //validate using model
        let newUser = await User.create(req.body)

        return res.status(200).json({ status:true,msg: "New User Created", newUser})
    } catch (err) {
        return res.status(500).json({status:false,msg:err })
    }
}
//read all user
const readallUser = async(req,res) => {
    try {
        let users = await User.find({})
        return res.status(200).json({status:true,length:users.length ,users})
    } catch (err) {
        return res.status(500).json({status:false,msg:err })
    }
}

//read single
const readsingleUser = async(req,res) => {
    try {

        let id = req.params.id

        let single = await User.findById(id)

                if(!single)
                    return res.status(400).json({ ststus: false,msg: `requested id not found`})
        
        return res.status(200).json({status:true, user:single})
    } catch (err) {
        return res.status(500).json({status:false,msg:err })
    }
}

//update user
const updateUser = async(req,res) => {
    try {
        return res.status(200).json({status:true,msg: 'update user'})
    } catch (err) {
        return res.status(500).json({status:false,msg:err })
    }
}

//delete user
const deleteUser = async(req,res) => {
    try {
        return res.status(200).json({status:true,msg: 'delete user'})
    } catch (err) {
        return res.status(500).json({status:false,msg:err })
    }
}

//default controller
const defaultCtrl = async (req,res) => {

    return res.status(404).json({status:false,msg: "Requested path not found.."})
}

module.exports = { createUser,readallUser,readsingleUser,updateUser,deleteUser,defaultCtrl }