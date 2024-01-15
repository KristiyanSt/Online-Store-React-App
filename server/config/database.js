const {mongoose} = require("mongoose");

const dbConnect = () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected succesfully")
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;
