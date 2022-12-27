const express = require("express");
const data = require("../data");
const BusTimings = require("../models/dataModel");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send("user router called");
});

userRouter.get("/add_data", async (req, res) => {
	const createdData = await BusTimings.create(data.datas);
	res.send("success");
});

userRouter.get("/available-slots", async (req, res) => {
	const slots = await BusTimings.find();
	const response = {};
	if (slots.length > 0) {
		response.code = 200;
		response.status = "success";
		response.data = slots;
	} else {
		response.code = 200;
		response.status = "success";
		response.data = "No slots available";
	}
	res.send(response);
});

module.exports = userRouter;
