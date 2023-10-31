const Product = require("../models/Product");

exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      size,
      color,
      price,
      offerPrice,
      gallery,
      seo_title,
      seo_description,
      seo_keywords,
      created_date,
      updated_date,
    } = req.body;
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Name and Price fields are required",
      });
    }
    const ProductDetails = await Product.create({
      name: name,
      category: category,
      description: description,
      size: size,
      color: color,
      price: price,
      offerPrice: offerPrice,
      gallery: gallery,
      seo_title: seo_title,
      seo_description: seo_description,
      seo_keywords: seo_keywords,
      created_date: created_date,
      updated_date: updated_date,
    });
    console.log(ProductDetails);
    return res.status(200).json({
      success: true,
      message: "Product Added Successfully",
      ProductDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
