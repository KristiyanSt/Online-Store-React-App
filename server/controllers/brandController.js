const asyncHandler = require("express-async-handler");
const Brand = require("../models/BlogCategory.js");
const { validateDbId } = require('../utils/validateDbId.js');

const createBrand = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Brand.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const updated = await Brand.findByIdAndUpdate(
            id, req.body, { new: true }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const deleted = await Brand.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDbId(id);
    try {
        const found = await Brand.findById(id);
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const found = await Brand.find();
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getAllBrands
}