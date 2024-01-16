const express = require('express');
const { createUser, loginUser, getUsers, getUser, deleteUser, updateUser } = require('../controllers/userController.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/:id', authMiddleware, getUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
module.exports = router;