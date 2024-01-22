const asyncHandler = require("express-async-handler");
const ProdCategory = require("../models/ProdCategory.js");
const { validateDbId } = require('../utils/validateDbId.js');

const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await ProdCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const updated = await ProdCategory.findByIdAndUpdate(
            id, req.body, { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const deleted = await ProdCategory.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const found = await ProdCategory.findById(id);
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const found = await ProdCategory.find();
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllCategories
}