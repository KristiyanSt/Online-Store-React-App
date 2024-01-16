const { generateToken } = require('../config/jwtToken.js');
const User = require('../models/User.js');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });
    console.log(req.body);

    if (!findUser) {
        //Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check if user exists 
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        throw new Error(error);
    }
});

const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
    } catch (error) {
        throw new Error(error);
    }
});

const updateUser = asyncHandler(async (req, res) => {
    //verify later

    const { id } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                firstname: req.body?.firstname,
                lastname: req.body?.lastname,
                email: req.body?.email
            },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }

})

module.exports = { createUser, loginUser, getUsers, getUser, deleteUser, updateUser }