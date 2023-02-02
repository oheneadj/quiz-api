const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const quizRoutes = require("./routes/quizRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/quizzes", quizRoutes);

app.use(errorHandler);

//Listen to PORT
app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
