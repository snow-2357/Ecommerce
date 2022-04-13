const router = require("express").Router();
const Cart = require("../models/Cart");

//create cart for a user
router.post("/:id", async (req, res) => {
  const newCart = new Cart({ userId: req.params.id, products: [] });
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// add new item in cart
router.post("/add/:id", async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.params.id },
      { $push:  {"products": req.body }},
      { new: true }
    );
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart.products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete items from cart

router.post("/delete/:id", async (req, res) => {
  try {
    await Cart.updateOne({ userId: req.params.id },
      { $pull: {"products": req.body }},
      { new: true });
    res.status(200).json("item deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
