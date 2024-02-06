const { Types: { ObjectId }, Schema, model } = require('mongoose');
const Product = require('./Product.js');

const CartSchema = new Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: "Product"
            },
            count: Number
        }
    ],
    orderBy: {
        type: ObjectId,
        ref: "User"
    },
    cartTotal: Number,
    totalAfterDiscount: Number
}, {
    timestamps: true
});

const Cart = model("Cart", CartSchema);
CartSchema.pre("save", async function (next) {
    let computeTotalPrice;
    for (const cartProduct of this.products) {
        const productId = cartProduct.product;
        const actualProduct = await Product.findById(productId);
        const totalProductPrice = actualProduct.price * cartProduct.count
        computeTotalPrice += totalProductPrice;
    }
    this.cartTotal = computeTotalPrice;
    next();
});
module.exports = Cart;