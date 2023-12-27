const Admin = require("../model/admin");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    bcrypt.genSalt(10, async function (err, salt) {
      const mypassword = await bcrypt.hash(req.body.password, salt);
      admin.password = mypassword;
      await admin.save();
      res.status(201).json({ msg: "New Admin Registered Successfully", admin });
    });
    // console.log(admin)
  } catch (err) {
    res.status(501).json({ err });
  }
};

exports.login = async (req, res) => {

  const {email, password} = req.body

  try {

    console.log({a:req.body})
    const admin = await Admin.findOne({email:email});
    console.log({admin})
    const isMatch = await bcrypt.compare(password, admin.password)
    if(!isMatch){

return res.status(401).json({msg:"Invalid Password"}) }
const accessToken = jwt.sign(
  { admin: { id: admin._id, email: admin.email } },
  process.env.JWT_SECRETE, // Use the environment variable
  { expiresIn: '1h' }
);
res.status(200).json({msg:"Login Successfull", accessToken, admin})

console.log(accessToken)
   
if(!admin){
  return res.status(400).json({msg:"Invalid User"})
}
  } catch (error) {

    console.log(error)
    res.status(501).json("Error ", error);
  }
};
