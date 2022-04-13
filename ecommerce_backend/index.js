const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

const app = express();
dotenv.config();
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("listing");
});
app.use(cors());
// app.use(cors(), function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

mongoose
  .connect(process.env.MONGO_LINK)
  .then(() => {
    console.log("db conected");
  })
  .catch((e) => {
    console.log(e);
  });

//auth
app.use("/api/auth", authRoute);

//user
app.use("/api/user", userRoute);

//product
app.use("/api/product", productRouter);

//cart
app.use("/api/cart", cartRouter);
