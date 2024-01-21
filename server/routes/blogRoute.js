const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog } = require('../controllers/blogController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = require('express').Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.get('/get-all', getAllBlogs);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog);
router.put('/like', authMiddleware, likeBlog);
router.put('/dislike', authMiddleware, dislikeBlog);

module.exports = router;