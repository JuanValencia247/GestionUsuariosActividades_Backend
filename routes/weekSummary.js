const express = require('express');
const router = express.Router();
const WeekSummaryController = require('../controllers/weekSummaryController');

router.post('/', WeekSummaryController.createWeekSummary);
router.get('/user/:userId', WeekSummaryController.getSummariesByUser);

module.exports = router;