const router = require("express").Router();
const Cart = require("../models/Cart");

// add new item in cart
  router.post("/:id", async (req, res) => {
    try {
      const updatedCart = await Cart.findOneAndUpdate(
      {userId: req.params.id},{$push:{"products":{"productId":121,"quantity":1}}},{new:true}
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  //GET USER CART
  router.get("/find/:userId",  async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports =router;