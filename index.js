const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/week-summaries',require('./routes/weekSummary'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor Corriendo en el Puerto ${PORT}`));