const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadBlogImages } = require('../controllers/blogController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages.js');

const router = require('express').Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.get('/get-all', getAllBlogs);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog);
router.put('/like', authMiddleware, likeBlog);
router.put('/dislike', authMiddleware, dislikeBlog);
router.put(
    '/upload/:id',
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 2),
    blogImgResize,
    uploadBlogImages
);

module.exports = router;