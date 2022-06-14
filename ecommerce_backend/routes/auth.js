const router = require("express").Router();
const JWT    = require("jsonwebtoken");
const User   = require("../models/User");
// const CryptoJs= require("crypto-js");

router.post("/register",async(req,res)=>{
    const newUser=new User({
        username : req.body.username,
        email    : req.body.email,
        password : req.body.password,
        // isAdmin  : req.body.isAdmin
    });

    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
        
    }catch(e){
        res.status(500).json(e);
    }
    
})

router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user){
            res.status(401).json("no user found")
        }else{

            if(user.password !==req.body.password){
                res.status(401).json("wrong password");
            }else{
                const {password, ...rest}=user._doc;
                const acessToken = JWT.sign({
                    id:user.id,
                    isAdmin:user.isAdmin,
                },
                process.env.PASS,
                {expiresIn:"2d"});

                res.status(200).json({...rest,acessToken});


            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
})
// router.post("/id", async(req, res) => {
//     try{
//       const user = await User.findOne({username:"sima"});
//       if(!user){
//         res.status(401).json("no user found")
//       }else{
//         res.status(200).json(user);
//       }
      
//     }catch(e){
//       res.status(500);
//     }
//   });

module.exports =router;