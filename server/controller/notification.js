const notification = require('../model/notification')
const newNotification = require ('../model/notification')

exports.createNotification = async(req,res)=>{
    try{
        const notification  = new newNotification(req.body)
        console.log(req.body)
        await notification.save()
        res.status(200).json({msg:"created successfully",notification})

    }
    catch(error){
        console.log(error)

    }
}
exports.getNotification= async(req,res)=>{
    try{
        const notification= await newNotification.find()
        res.status(200).json({msg:"Successfully fetched all notifications",notification})

    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})
    }
}
exports.getOnenotification = async(req,res)=>{
    try{
        const notification = await newNotification.findById(req.params.id)
        res.status(201).json({msg:"Successfully fetched a notification",notification})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})

    }
}
exports.updateNotification = async(req,res)=>{
    try{
        const notification = await newNotification.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).json({msg:"notification details updated successfully",notification})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}
exports.deleteNotification = async(req,res)=>{
    try{
        const notification= await newNotification.findByIdAndDelete({_id:req.params.id})
        res.status(500).json({msg:"notification deleted successfully",notification})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}