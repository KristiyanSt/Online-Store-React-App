const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, rating, uploadProductImages } = require('../controllers/productController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');
const { uploadPhoto,productImgResize } = require('../middlewares/uploadImages.js');


const router = require('express').Router();


router.post(
    '/upload/:id',
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 2),
    // productImgResize,
    uploadProductImages 
);
router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/all-products', getAllProducts);
router.put('/update/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);
router.get('/:id', getProduct);
router.put('/rating', authMiddleware, rating);
module.exports = router;