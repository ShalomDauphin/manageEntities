const express = require('express');
const app = express();
const routes = express.Router();

const staffs = require('../controller/staff');

routes.route('/:id').get(staffs.getOneStaff);

routes
	.route('/')
	.get(staffs.getAllStaff)
	.post(staffs.createStaff)
	.put(staffs.updateStaff)
	.delete(staffs.deleteStaff);

module.exports = routes;

/*
    createStaff,
	updateStaff,
	deleteStaff,
	getAllStaff,
	getOneStaff,
    */
