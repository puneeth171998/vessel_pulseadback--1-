const vesselReg = require('../model/vesselReg')
const newVessel = require('../model/vesselReg')

exports.createvesselReg = async(req,res)=>{
    try{
        const newReg = new newVessel(req.body)
        console.log(req.body)
        await newReg.save()
        res.status(200).json({msg:"Created new vessel successfully",newReg})

    }
    catch(error){
        console.log(error)

    }
}
exports.getvesselReg= async(req,res)=>{
    try{
        const newReg= await newVessel.find()
        res.status(200).json({msg:"Successfully fetched all vessels",newReg})

    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})
    }
}

exports.getOnevesselReg = async(req,res)=>{
    try{
        const newReg = await newVessel.findById(req.params.id)
        res.status(201).json({msg:"Successfully fetched a vessel",newReg})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})

    }
}
exports.updatevesselReg = async(req,res)=>{
    try{
        const newReg = await newVessel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).json({msg:"Vessel updated successfully",newReg})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}
exports.deletevesselReg = async(req,res)=>{
    try{
        const newReg = await newVessel.findByIdAndDelete({_id:req.params.id})
        res.status(500).json({msg:"Vessel deleted successfully",newReg})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}