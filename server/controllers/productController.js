const asyncHandler = require("express-async-handler");
const Product = require("../models/Product.js");
const slugify = require('slugify');


const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const queryObj = {...req.query};
        const excludeFields = ["page","sort","limit","fields"];

        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g , match => `$${match}`);
        console.log(JSON.parse(queryString));

        const allProducts = await Product.find(JSON.parse(queryString));
        res.json(allProducts);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const update = await Product.findByIdAndUpdate( id , req.body, { new: true });
        res.json(update);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const del = await Product.findByIdAndDelete(id);
        res.json(del);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}