const express       = require("express")
const mongoose      = require("mongoose");
const dotenv        = require("dotenv");
const app           = express();
const userRoute     = require("./routes/user")
const authRoute     = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter    = require("./routes/cart")
dotenv.config();
app.use(express.json());

app.listen(process.env.PORT || 5000,()=>{
  console.log("listing");
})

mongoose.connect(process.env.MONGO_LINK)
.then(()=>{
  console.log("db conected");  
})
.catch((e)=>{console.log(e)});

//auth
app.use("/api/auth",authRoute)

//user
app.use("/api/user", userRoute);

//product
app.use("/api/product",productRouter);

//cart
app.use("/api/cart",cartRouter);