const asyncHandler = require("express-async-handler");
const Coupon = require("../models/Coupon.js");
const { validateDbId } = require("../utils/validateDbId.js");

const createCoupon = asyncHandler(async (req,res) => {
    try {
        const created = await Coupon.create(req.body);
        res.json(created);
    } catch (error) {
        throw new Error(error);
    }
});
const updateCoupon = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateDbId(id);
    try {
        const updated = await Coupon.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteCoupon = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateDbId(id);
    try {
        const deleted = await Coupon.findByIdAndDelete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(error);
    }
});

const getCoupon = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateDbId(id);
    try {
        const found = await Coupon.findById(id);
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});
const getAllCoupons = asyncHandler(async (req,res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    createCoupon,
    updateCoupon,
    deleteCoupon,
    getCoupon,
    getAllCoupons
}