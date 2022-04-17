const router = require("express").Router();

const Product = require("../models/Product");

//create

router.post("/addproduct", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// update

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!product) {
      res.status(401).json("no product found");
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500);
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get poduct by id

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(401).json("No item found");
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// all products

router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const products = query
      ? await Product.find().sort({ _id: -1 }).limit(5)
      : await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// searching products req.params.data

router.get("/search/:item", async (req, res) => {
  try {
    const product = await Product.find({
      title: { $regex: `.*${req.params.item}*` , $options: 'i'},
    });
    if (!product) {
      res.status(401).json("No item found");
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
