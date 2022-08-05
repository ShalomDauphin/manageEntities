const express = require('express');
const app = express();
const routes = express.Router();

const trainers = require('../controller/trainers');

routes.route('/:id').get(trainers.getOneTrainer);

routes
	.route('/')
	.get(trainers.getAllTrainers)
	.post(trainers.createTrainer)
	.put(trainers.updateTrainer)
	.delete(trainers.deleteTrainer);

module.exports = routes;

/*
    createTrainer,
	updateTrainer,
	deleteTrainer,
	getAllTrainers,
	getOneTrainer,
    */
