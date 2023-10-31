const express = require("express");
const router = express.Router();
const {
  createProduct,
  allProducts,
} = require("../controllers/ProductController");

router.post("/createproduct", createProduct);
router.post("/allproducts", allProducts);

module.exports = router;
