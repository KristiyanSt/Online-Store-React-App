const { Types: { ObjectId }, Schema, model } = require('mongoose');

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true,
    },
    category: {
        type:String,
        required: true
    },
    numViews: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDisliked: {
        type: Boolean,
        default: false
    },
    likes:[{
        type: ObjectId,
        ref: "User"
    }],
    dislikes: [{
        type: ObjectId,
        ref: "User"
    }],
    images: [],
    author: {
        type: String,
        default: 'Admin'
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

const Blog = model('Blog',BlogSchema);
module.exports = Blog;
