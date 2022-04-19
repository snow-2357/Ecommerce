const router = require("express").Router();
const User   = require("../models/User");
const { verifyToken , verifyTokenAndAuthorization } = require("./verifyToken");


//edit user data
router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
      const user = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
      if(!user){
        res.status(401).json("no user found")
      }else{
        res.status(200).json(user);
      }
      
    }catch(e){
      res.status(500);
    }
  });

module.exports =router;

//get user data
router.get("/find/:id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password,...rest}=user._doc;
        res.status(500).json(rest);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all users

router.get("/",async(req,res)=>{
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
})

