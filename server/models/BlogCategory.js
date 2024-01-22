const { Types: { ObjectId }, model, Schema } = require('mongoose');

const BlogCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
});


const BlogCategory = model("BlogCategory", BlogCategorySchema);
module.exports = BlogCategory;