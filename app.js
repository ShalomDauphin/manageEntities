const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
require('dotenv').config();

const StaffRoutes = require('./routes/staff');
const TraineesRoutes = require('./routes/trainees');
const TrainersRoutes = require('./routes/trainers');

const app = express();
app.use(express.json());

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	} catch (error) {
		console.log(error);
	}
};

app.use('/staffs', StaffRoutes);
app.use('/trainees', TraineesRoutes);
app.use('/trainers', TrainersRoutes);

mongoose.connection.on('disconnected', () => {
	console.log('Database Disconnected!!!');
});

app.listen(process.env.PORT, () => {
	connect();
	console.log(`App running on port ${process.env.PORT}`);
	console.log('Connected to the BackEnd!!');
});
