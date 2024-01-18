const asyncHandler = require('express-async-handler');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/',authMiddleware,isAdmin, createProduct);
router.get('/all-products', getAllProducts);
router.put('/update/:id',authMiddleware,isAdmin, updateProduct);
router.delete('/delete/:id',authMiddleware,isAdmin, deleteProduct);
router.get('/:id', getProduct);
module.exports = router;