const mongoose = require('mongoose');

const TrainersSchema = new mongoose.Schema({
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

const trainers = mongoose.model('trainers', TrainersSchema);

module.exports = trainers;
