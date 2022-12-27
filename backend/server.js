const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// Database configuration
const db = require("./config/db");
db.connect();

// Routes configuration
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
	res.send("Nodejs is working");
});

app.listen(port, () => {
	console.log(`Server is running at the port ${port}`);
});
