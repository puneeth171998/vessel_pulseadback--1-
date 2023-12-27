const newCreateowner= require ('../model/createowner');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


exports.createOwner = async(req,res)=>{
    try{
        const Createowner = await newCreateowner.create(req.body);
        bcrypt.genSalt(10, async function(err,salt){
            const mypassword = await bcrypt.hash(req.body.password, salt);
            Createowner.password = mypassword;
            await Createowner.save();
            res.status(201).json({ msg:"Vessel Owner Created Successfully", Createowner})
        })
    }
    catch(error){
        console.log(error)

    }
}


exports.ownerLog = async (req, res) => {

    const {email, password} = req.body
  
    try {
  
      console.log({a:req.body})
      const Createowner = await newCreateowner.findOne({email:email});
      console.log({Createowner})
      const isMatch = await bcrypt.compare(password, Createowner.password)
      if(!isMatch){
  
  return res.status(401).json({msg:"Invalid Password"}) }
  const accessToken = jwt.sign(
    { Createowner: { id: Createowner._id, email: Createowner.email } },
    process.env.JWT_SECRETE, // Use the environment variable
    { expiresIn: '1h' }
  );
  res.status(200).json({msg:"Login Successfull", accessToken, Createowner})
  
  console.log(accessToken)
     
  if(!Createowner){
    return res.status(400).json({msg:"Invalid User"})
  }
    } catch (error) {
  
      console.log(error)
      res.status(501).json("Error ", error);
    }
  };
  

exports.getOwner= async(req,res)=>{
    try{
        const getowner= await newCreateowner.find()
        res.status(200).json({msg:"Successfully fetched all Vessel Owner details",getowner})

    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})
    }
}
exports.getOneOwner = async(req,res)=>{
    try{
        const getowner = await newCreateowner.findById(req.params.id)
        res.status(201).json({msg:"Successfully fetched a Vessel Ownerdetails",getowner})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"Error"})

    }
}
exports.updateOwner = async(req,res)=>{
    try{
        const updateowner = await newCreateowner.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).json({msg:"Vessel Owner details updated successfully",updateowner})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}
exports.deleteOwner= async(req,res)=>{
    try{
        const deleteowner = await newCreateowner.findByIdAndDelete({_id:req.params.id})
        res.status(500).json({msg:"Vessel Owner details deleted successfully",deleteowner})
    }
    catch(error){
        console.log(error)
        res.status(404).json({msg:"error"})
    }
}

exports.updateOwnerAlert = async (req, res) => {
    try {
      const ownerId = req.params.id;
      const { alert_message } = req.body;
  
      // Find the owner by ID and update the alert_message field
      const updatedOwner = await newCreateowner.findByIdAndUpdate(
        ownerId,
        { alert_message },
        { new: true }
      );
  
      if (!updatedOwner) {
        return res.status(404).json({ msg: 'Owner not found' });
      }
  
      res.status(200).json({ msg: 'Alert message updated successfully', updatedOwner });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  };