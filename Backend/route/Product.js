const express = require("express");
const router = express.Router();
const {
  createProduct,
  allProducts,
  updateProduct,
  singleProduct
} = require("../controllers/ProductController");

router.post("/createproduct", createProduct);
router.post("/allproducts", allProducts);
router.post("/singleproduct", singleProduct);
router.post("/updateproducts", updateProduct);

module.exports = router;
