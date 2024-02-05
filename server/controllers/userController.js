const { generateToken } = require('../config/jwtToken.js');
const { generateRefreshToken } = require('../config/refreshToken.js');
const User = require('../models/User.js');
const Product = require('../models/Product.js');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { validateDbId } = require('../utils/validateDbId.js');
const { sendEmail } = require('./emailController.js');
const crypto = require('crypto');
const Cart = require('../models/Cart.js');
const Coupon = require('../models/Coupon.js');
const Order = require('../models/Order.js');
const uniqid = require('uniqid');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        //Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exists 
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = generateRefreshToken(findUser?._id);
        const updateUser = await User.findByIdAndUpdate(
            findUser?._id,
            {
                refreshToken
            },
            {
                new: true
            }
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exists 
    const findAdmin = await User.findOne({ email });
    //check if finded is admin
    if (findAdmin.role !== 'admin') throw new Error('Not Authorized');

    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = generateRefreshToken(findAdmin?._id);
        const updateUser = await User.findByIdAndUpdate(
            findAdmin?._id,
            {
                refreshToken
            },
            {
                new: true
            }
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        });
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            token: generateToken(findAdmin?._id)
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        throw new Error(error);
    }
});

const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
    } catch (error) {
        throw new Error(error);
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req.body?.firstname,
                lastname: req.body?.lastname,
                email: req.body?.email
            },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true
            },
            {
                new: true
            }
        );
        res.json({
            message: 'User Blocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false
            },
            {
                new: true
            }
        );
        res.json({
            message: 'User Unblocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh token in cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No user matched to this refresh token");
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    if (decoded.id != user._id) throw new Error("Trouble with refresh token");
    const accesstoken = generateToken(user._id);
    res.json({ accesstoken })
});

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh token in cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true
        });
        return res.sendStatus(204);
    }
    await User.findOneAndUpdate({ refreshToken }, {
        refreshToken: ""
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
    });
    res.sendStatus(204);
});

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedUser = await user.save(); // save(), not findByIdAndUpdate(), because executing save will go through model's middlewares
        res.json(updatedUser);
    } else {
        res.json(user);
    }
});

const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found with this email');
    }
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset your password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click here</a>`;
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetURL
        };
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
});

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });

    if (!user) throw new Error('Token expired, Please try again');

    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

const getWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const found = await User.findById(_id).populate('wishlist');
        res.json(found);
    } catch (error) {
        throw new Error(error);
    }
});

const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId } = req.body;
    try {
        const user = await User.findById(_id);
        const hasAdded = user.wishlist.some(id => id.toString() === productId);
        if (hasAdded) {
            user.wishlist.pull({ _id: productId });
            return res.json(await user.save());
        } else {
            user.wishlist.push({ _id: productId });
            return res.json(await user.save());
        }
    } catch (error) {
        throw new Error(error);
    }
});

const saveAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { address } = req.body;
    try {
        const updated = await User.findByIdAndUpdate(_id,
            {
                address
            },
            {
                new: true
            }
        );
        res.json(updated);
    } catch (error) {
        throw new Error(error);
    }
});

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateDbId(_id);

    try {
        const user = await User.findById(_id);
        const existCart = await Cart.findOne({ orderBy: user._id });
        if (existCart) {
            existCart.remove();
        }
        let products = [];
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select("price").exec();
            object.price = getPrice.price;
            products.push(object);
        }

        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal += products[i].price * products[i].count;
        }

        let newCart = await new Cart({
            products,
            cartTotal,
            orderBy: user._id
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
});

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateDbId(_id);
    try {
        const cart = await Cart.findOne({ orderBy: _id }).populate("products.product");
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateDbId(_id);
    try {
        const user = await User.findById(_id);
        const cart = await Cart.findOneAndDelete({ orderBy: user._id });
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;

    //verify coupon
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (!validCoupon) {
        throw new Error('Invalid coupon');
    }

    const user = await User.findById(_id);
    let { cartTotal } = await Cart.findOne({ orderBy: user._id })
        .populate("products.product");

    let totalAfterDiscount = cartTotal - (cartTotal * (validCoupon.discount / 100)).toFixed(2);
    await Cart.findOneAndUpdate({ orderBy: user._id }, { totalAfterDiscount }, { new: true });
    res.json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateDbId(_id);

    if (!COD) {
        throw new Error('Order failed');
    }

    try {
        const user = await User.findById(_id);
        const cart = await Cart.findOne({ orderBy: user._id });

        let finalAmount = 0;
        if (couponApplied && cart.totalAfterDiscount) {
            finalAmount = cart.totalAfterDiscount;
        } else {
            finalAmount = cart.cartTotal;
        }

        let newOrder = await new Order({
            products: cart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: "Cash on delivery",
                created: Date.now(),
                currency: "usd"
            },
            orderBy: user._id,
            orderStatus: "Cash on delivery"
        }).save();

        const update = cart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } }
                }
            }
        });
        const updated = await Product.bulkWrite(update, {});
        res.json({ message: "success" });
    } catch (error) {
        throw new Error(error);
    }

});

const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateDbId(_id);

    try {
        const userOrders = await Order.findOne({ orderBy: _id }).populate("products.product");
        res.json(userOrders);
    } catch (error) {
        throw new Error(error);
    }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateDbId(id);

    try {
        const updatedOrderStatus = await Order.findByIdAndUpdate(id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status
                }
            },
            {
                new: true
            });
        res.json(updatedOrderStatus);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createUser,
    loginUser,
    loginAdmin,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    getWishList,
    addToWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus
}