const { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupons } = require('../controllers/couponController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, createCoupon);
router.put('/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);
router.get('/:id', authMiddleware, isAdmin, getCoupon);
router.get('/', authMiddleware, isAdmin, getAllCoupons);


module.exports = router;