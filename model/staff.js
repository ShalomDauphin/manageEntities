const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	secondname: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
});

const staff = mongoose.model('staff', StaffSchema);

module.exports = staff;
