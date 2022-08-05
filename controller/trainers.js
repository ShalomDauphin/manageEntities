const trainers = require('../model/trainers');

const createTrainer = async (req, res, next) => {
	const newTrainees = new trainers(req.body);

	try {
		const savedTrainers = await newTrainers.save();
		res.status(200).json(savedTrainers);
	} catch (err) {
		next(err);
	}
};

const updateTrainer = async (req, res, next) => {
	try {
		const updatedTrainers = await trainers.findbyIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updatedTrainers);
	} catch (err) {
		next(err);
	}
};

const deleteTrainer = async (req, res, next) => {
	try {
		await trainers.findbyIdAndDelete(req.params.id);
		res.status(200).json('Trainer has been Deleted');
	} catch (err) {
		next(err);
	}
};

const getAllTrainers = async (req, res, next) => {
	try {
		const Trainers = await trainers.find().exec();
		res.status(200).json(Trainers);
	} catch (err) {
		next(err);
	}
};

const getOneTrainer = async (req, res, next) => {
	try {
		const oneTrainer = await trainers.findById(req.params.id);
		res.status(200).json(oneTrainer);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	createTrainer,
	updateTrainer,
	deleteTrainer,
	getAllTrainers,
	getOneTrainer,
};
