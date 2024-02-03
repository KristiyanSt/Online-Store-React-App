const express = require("express");
const dbConnect = require("./config/database.js");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const cors = require('cors');

const authRouter = require('./routes/authRoute.js');
const blogRouter = require('./routes/blogRoute.js');
const productRouter = require('./routes/productRoute.js');
const prodCategoryRouter = require('./routes/prodCategoryRoute.js');
const blogCategoryRouter = require('./routes/blogCategoryRoute.js');
const brandRouter = require('./routes/brandRoute.js');
const couponRouter = require('./routes/couponRoute.js');

const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler.js");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');

dbConnect();
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/prod-category", prodCategoryRouter);
app.use("/api/blog-category", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});