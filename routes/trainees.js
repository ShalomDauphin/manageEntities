const express = require('express');
const app = express();
const routes = express.Router();

const trainees = require('../controller/trainees');

routes.route('/:id').get(trainees.getOneTrainee);

routes
	.route('/')
	.get(trainees.getAllTrainees)
	.post(trainees.createTrainees)
	.put(trainees.updateTrainee)
	.delete(trainees.deleteTrainee);

module.exports = routes;

/*
    createTrainees,
	updateTrainee,
	deleteTrainee,
	getAllTrainees,
	getOneTrainee,
    */
