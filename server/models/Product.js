const { Schema, Types: { ObjectId }, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required:true
    },
    brand: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    ratings: [{
        star: Number,
        postedby: { type: ObjectId, ref: "User" }
    }],
}, {
    timestamps: true
});

const Product = model('Product', ProductSchema);
module.exports = Product;