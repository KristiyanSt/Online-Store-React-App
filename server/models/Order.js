const { Types: { ObjectId }, Schema, model } = require('mongoose');

const OrderSchema = new Schema({
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
    paymentIntent: {

    },
    orderStatus: {
        type: String,
        default: "Not Processed",
        enum: ["Not Processed", "Cash on delivery", "Processing", "Dispatched", "Canceled", "Delivered"]
    },
    orderBy: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});


const Order = model('Order', OrderSchema);

module.exports = Order;