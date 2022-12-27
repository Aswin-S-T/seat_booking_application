const mongoose = require("mongoose");
const dbUrl =
	process.env.DB_URL || "mongodb://localhost:27017/seat_booking_system";

mongoose.set("strictQuery", false);

module.exports.connect = () => {
	mongoose.connect(
		dbUrl,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err) => {
			if (err) throw err;
			console.log("Database connected successfully...." + dbUrl);
		}
	);
};
