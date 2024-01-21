const asyncHandler = require("express-async-handler");
const Blog = require("../models/Blog.js");
const User = require("../models/User.js");
const { validateDbId } = require("../utils/validateDbId.js");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const created = await Blog.create(req.body);
        res.json({
            created
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id); // TODO: or create a middleware in the future 
    try {
        const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id); // TODO: or create a middleware in the future 
    try {
        const blog = await Blog.findById(id).populate('likes').populate('dislikes');
        res.json(blog);
        blog.numViews = ++blog.numViews;
        blog.save()
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id); // TODO: or create a middleware in the future 
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        res.json(deletedBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    const userId = req.user._id;
    validateDbId(blogId); // TODO: or create a middleware in the future 

    const blog = await Blog.findById(blogId);
    const hasLiked = blog.likes.some(id => id.toString() === userId.toString());
    const hasDisliked = blog.dislikes.some(id => id.toString() === userId.toString());

    if (hasLiked) {
        blog.isLiked = false;
        blog.likes.pull({ _id: userId });
    } else if (hasDisliked) {
        blog.isDisliked = false;
        blog.isLiked = true;
        blog.dislikes.pull({ _id: userId });
        blog.likes.push({ _id: userId });
    } else {
        blog.isLiked = true;
        blog.likes.push({ _id: userId });
    }
    await blog.save();
    return res.json(blog);
});

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    const userId = req.user._id;
    validateDbId(blogId); // TODO: or create a middleware in the future 

    const blog = await Blog.findById(blogId);
    const hasLiked = blog.likes.some(id => id.toString() === userId.toString());
    const hasDisliked = blog.dislikes.some(id => id.toString() === userId.toString());

    if (hasDisliked) {
        blog.isDisliked = false;
        blog.dislikes.pull({ _id: userId });
    } else if (hasLiked) {
        blog.isLiked = false;
        blog.isDisliked = true;
        blog.likes.pull({ _id: userId });
        blog.dislikes.push({ _id: userId });
    } else {
        blog.isDisliked = true;
        blog.dislikes.push({ _id: userId });
    }

    await blog.save();
    return res.json(blog);
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog
}