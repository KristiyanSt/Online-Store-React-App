const express = require('express');
const { createUser, loginUser, getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder,getOrders, updateOrderStatus, addToWishlist, addToCart, removeFromCart } = require('../controllers/userController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/login-admin', loginAdmin);
router.post('/forgot-password-token', forgotPasswordToken);
router.post('/cart', authMiddleware, userCart);
router.post('/add-to-cart', authMiddleware, addToCart);
router.post('/remove-from-cart', authMiddleware, removeFromCart);
router.post('/apply-coupon', authMiddleware, applyCoupon);
router.post('/create-order', authMiddleware, createOrder);

router.get('/all-users', getUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/get-orders', authMiddleware, getOrders);
router.get('/wishlist', authMiddleware, getWishList);
router.get('/cart', authMiddleware, getUserCart);
router.get('/:id', authMiddleware, isAdmin, getUser);

router.delete('/delete/:id', deleteUser);
router.delete('/empty-cart', authMiddleware, emptyCart);

router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/edit', authMiddleware, updateUser);
router.put('/update-order/:id',authMiddleware, isAdmin, updateOrderStatus);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/password', authMiddleware, updatePassword);
router.put('/reset-password/:token', resetPassword);


module.exports = router; 