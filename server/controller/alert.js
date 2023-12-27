const alert = require('../model/alert')
const newAlert = require ('../model/alert')

exports.createAlert = async(req,res)=>{
    try{
        const alert = new newAlert(req.body)
        console.log(req.body)
        await alert.save()
        res.status(200).json({msg:"created successfully",alert})

    }
    catch(error){
        console.log(error)

    }
}
exports.getAlert= async(req,res)=>{
    try{
        const alert= await newAlert.find()
        res.status(200).json({msg:"Successfully fetched all alerts",alert})

    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})
    }
}
exports.getOneAlert = async(req,res)=>{
    try{
        const alert = await newAlert.findById(req.params.id)
        res.status(201).json({msg:"Successfully fetched a alert",alert})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})

    }
}
exports.updateAlert = async(req,res)=>{
    try{
        const alert = await newAlert.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).json({msg:"alert updated successfully",alert})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}
exports.deleteAlert= async(req,res)=>{
    try{
        const alert = await newAlert.findByIdAndDelete({_id:req.params.id})
        res.status(500).json({msg:"alert deleted successfully",alert})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}