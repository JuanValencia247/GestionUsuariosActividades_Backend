const express = require('express');
const router = express.Router();
const actCtrl = require('../controllers/activityController');

router.post('/', actCtrl.createActivity);
router.get('/:userId', actCtrl.getActivitiesByUser);
router.get('/summary/:userId', actCtrl.getWeeklySummary);
router.put('/:id', actCtrl.updateActivity);
router.delete('/:id', actCtrl.deleteActivity);

module.exports = router;