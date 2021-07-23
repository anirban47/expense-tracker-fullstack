const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const morgan = require("morgan");

const app = express();

connectDB();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/transactions", transactionRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(
        `Server running on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
});
