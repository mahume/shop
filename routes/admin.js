const path = require("path");
const express = require("express");
const { getAddProduct, getProducts, postAddProduct } = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", getAddProduct);

router.get("/products", getProducts);

router.post("/add-product", postAddProduct);

module.exports = router;
