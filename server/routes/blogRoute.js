const { createBlog, updateBlog, getBlog } = require('../controllers/blogController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/',authMiddleware, isAdmin, createBlog);
router.put('/update/:id',authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);


module.exports = router;