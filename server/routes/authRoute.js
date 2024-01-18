const express = require('express');
const { createUser, loginUser, getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout } = require('../controllers/userController.js');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all-users', getUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/:id', authMiddleware,isAdmin, getUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id',authMiddleware, updateUser);
router.put('/block/:id',authMiddleware,isAdmin, blockUser);
router.put('/unblock/:id',authMiddleware,isAdmin, unblockUser);
module.exports = router; 