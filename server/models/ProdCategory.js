const { Types: { ObjectId }, model, Schema } = require('mongoose');

const ProdCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
});


const ProdCategory = model("ProdCategory", ProdCategorySchema);
module.exports = ProdCategory;