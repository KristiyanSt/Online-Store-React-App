const { createBrand, getBrand, getAllBrands, updateBrand, deleteBrand } = require('../controllers/brandController.js');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, createBrand);
router.get('/:id', getBrand);
router.get('/', getAllBrands);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);


module.exports = router;