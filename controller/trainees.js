const trainees = require('../model/trainees');

const createTrainees = async (req, res, next) => {
	const newTrainees = new trainees(req.body);

	try {
		const savedTrainees = await newTrainees.save();
		res.status(200).json(savedTrainees);
	} catch (err) {
		next(err);
	}
};

const updateTrainee = async (req, res, next) => {
	try {
		const updatedTrainees = await trainees.findbyIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updatedTrainees);
	} catch (err) {
		next(err);
	}
};

const deleteTrainee = async (req, res, next) => {
	try {
		await trainees.findbyIdAndDelete(req.params.id);
		res.status(200).json('Trainees has been Deleted');
	} catch (err) {
		next(err);
	}
};

const getAllTrainees = async (req, res, next) => {
	try {
		const Traineess = await trainees.find().exec();
		res.status(200).json(Traineess);
	} catch (err) {
		next(err);
	}
};

const getOneTrainee = async (req, res, next) => {
	try {
		const oneTrainee = await trainees.findById(req.params.id);
		res.status(200).json(oneTrainee);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	createTrainees,
	updateTrainee,
	deleteTrainee,
	getAllTrainees,
	getOneTrainee,
};
