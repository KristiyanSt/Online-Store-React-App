const { Types: { ObjectId }, Schema, model } = require('mongoose');

const CartSchema = new Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: "Product"
            },
            count: Number,
            color: String,
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

module.exports = Cart;