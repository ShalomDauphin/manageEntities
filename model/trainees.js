const mongoose = require('mongoose');

const TraineesSchema = new mongoose.Schema({
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

const trainees = mongoose.model('trainees', TraineesSchema);

module.exports = trainees;
