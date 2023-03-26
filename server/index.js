const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

//routes
const blogs = require("./routes/api/blogs");

const app = express();

//Connect to Database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello, I am going to build a blog app."));

//use routes
app.use("/api/blogs", blogs);

const port = process.env.PORT || 4050;

app.listen(port, () => console.log(`Server is running on port ${port}`));
