const User = require('../models/User.js');


const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });
    console.log(req.body);

    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        res.json({
            msg: 'User Already Exists',
            success: false
        });
    }
}

module.exports = { createUser }