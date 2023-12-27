const captain = require('../model/captain')
const newCaptain = require ('../model/captain')


exports.createCaptain = async(req,res)=>{
    try{
        const captain = new newCaptain(req.body)
        console.log(req.body)
        await captain.save()
        res.status(200).json({msg:"created successfully",captain})

    }
    catch(error){
        console.log(error)

    }
}

exports.getCaptain= async(req,res)=>{
    try{
        const captain= await newCaptain.find()
        res.status(200).json({msg:"Successfully fetched all captain details",captain})

    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})
    }
}
exports.getOnecaptain = async(req,res)=>{
    try{
        const captain = await newCaptain.findById(req.params.id)
        res.status(201).json({msg:"Successfully fetched a captain details",captain})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})

    }
}
exports.updateCaptain = async(req,res)=>{
    try{
        const captain = await newCaptain.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).json({msg:"captain details updated successfully",captain})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}
exports.deleteCaptain= async(req,res)=>{
    try{
        const captain = await newCaptain.findByIdAndDelete({_id:req.params.id})
        res.status(500).json({msg:"captain details deleted successfully",captain})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}