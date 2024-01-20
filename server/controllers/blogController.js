const asyncHandler = require("express-async-handler");
const Blog = require("../models/Blog.js");
const User = require("../models/User.js");
const { validateDbId } = require("../utils/validateDbId.js");

const createBlog = asyncHandler(async (req, res) => {
    console.log(req.body);
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
    try {
        const updated = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        res.json(blog);
        blog.numViews = ++blog.numViews;
        blog.save()
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog
}