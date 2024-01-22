const { Types: { ObjectId }, model, Schema } = require('mongoose');

const BrandSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
});


const Brand = model("Brand", BrandSchema);
module.exports = Brand;