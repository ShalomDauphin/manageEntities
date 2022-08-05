const staff = require('../model/staff');

const createStaff = async (req, res, next) => {
	const newStaff = new staff(req.body);

	try {
		const savedStaff = await newStaff.save();
		res.status(200).json(savedStaff);
	} catch (err) {
		next(err);
	}
};

const updateStaff = async (req, res, next) => {
	try {
		const updatedStaff = await staff.findbyIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updatedStaff);
	} catch (err) {
		next(err);
	}
};

const deleteStaff = async (req, res, next) => {
	try {
		await staff.findbyIdAndDelete(req.params.id);
		res.status(200).json('Staff has been Deleted');
	} catch (err) {
		next(err);
	}
};

const getAllStaff = async (req, res, next) => {
	try {
		const Staffs = await staff.find().exec();
		res.status(200).json(Staffs);
	} catch (err) {
		next(err);
	}
};

const getOneStaff = async (req, res, next) => {
	try {
		const oneStaff = await staff.findById(req.params.id);
		res.status(200).json(oneStaff);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	createStaff,
	updateStaff,
	deleteStaff,
	getAllStaff,
	getOneStaff,
};
