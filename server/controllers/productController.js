const asyncHandler = require("express-async-handler");
const Product = require("../models/Product.js");
const slugify = require('slugify');
const User = require("../models/User.js");


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
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach(field => delete queryObj[field]);
        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);


        //sort
        let sortString;
        if (req.query.sort) {
            sortString = req.query.sort.split(",").join(" ");
        } else {
            sortString = "-createdAt";
        }

        //limit the fields
        let fieldsString;
        if (req.query.fields) {
            fieldsString = req.query.fields.split(",").join(" ");
        } else {
            fieldsString = "-__v";
        }

        //pagination
        let limit;
        let skip;
        if (req.query.page) {
            const page = req.query.page;
            limit = req.query.limit;
            skip = (page - 1) * limit;
            const productsCount = await Product.countDocuments();
            if (productsCount < limit * skip) {
                throw new Error('This page does not exist');
            }
        }

        const products = await Product
            .find(JSON.parse(queryString))
            .sort(sortString)
            .select(fieldsString)
            .skip(skip)
            .limit(limit);
        res.json(products);
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
        const update = await Product.findByIdAndUpdate(id, req.body, { new: true });
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

const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId } = req.body;
    try {
        const user = await User.findById(_id);
        const hasAdded = user.wishlist.some(id => id.toString() === productId);
        if (hasAdded) {
            user.wishlist.pull({ _id: productId });
            return res.json(await user.save());
        } else {
            user.wishlist.push({ _id: productId });
            return res.json(await user.save());
        }
    } catch (error) {
        throw new Error(error);
    }
});

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, productId, comment } = req.body;
    try {
        const product = await Product.findById(productId);
        const rating = product.ratings.find(rating => rating.postedby.toString() === _id.toString());
        if (rating) {
            rating.star = star;
            rating.comment = comment;
        } else {
            product.ratings.push({ star, comment, postedby: _id });
        }

        const ratingSum = product.ratings.reduce((acc, rating) => acc += rating.star, 0);
        const totalRating = Math.round(ratingSum / product.ratings.length);
        product.totalrating = totalRating;
        res.json(await product.save());
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating
}