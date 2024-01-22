const {  createCategory,
    updateCategory,
    deleteCategory,
    getCategory, 
    getAllCategories} = require('../controllers/prodCategoryController.js');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/', authMiddleware, isAdmin, createCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategories);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);


module.exports = router;