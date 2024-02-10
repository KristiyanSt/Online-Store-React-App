const { mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const connection = mongoose.connect(
            process.env.NODE_ENV === "production"
                ? process.env.MONGODB_URL
                : process.env.MONGODB_URL_DEV
        );
        console.log("Database connected succesfully")
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;
