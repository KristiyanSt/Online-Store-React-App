const { mongoose } = require("mongoose");
const { Types } = mongoose.Schema;
const { ObjectId } = Types;

const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Array,
        default: []
    },
    address: [{ type: ObjectId, ref: "Address" }],
    wishlist: [{ type: ObjectId, ref: "Product" }],
    refreshToken: { type: String }
},
    {
        timestamps: true
    });

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
});
UserSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", UserSchema)
module.exports = User;