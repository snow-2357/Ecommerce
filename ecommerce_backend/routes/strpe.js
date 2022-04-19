const router = require("express").Router();

const key="KEYFORMSTRIP"

const stripe = require("stripe")(key);

router.post("/payment",(req, rea)=>{
    stripe.charges.create({
        souruce: "",
        amount:"123",
        currency:"usd"
    },(stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    
    )
})

module.exports = router;