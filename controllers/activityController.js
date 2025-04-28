const Activity = require('../models/Activity');

exports.createActivity = async (req, res) => {
  const activity = await Activity.create(req.body);
  return res.status(200).json({
    status: 'Success', 
    msg: 'Guardado Correctamente',
    activity
  });
};

exports.getActivitiesByUser = async (req, res) => {
  const activities = await Activity.find({ userId: req.params.userId });
  return res.status(200).json({
    status: 'Success', 
    msg: 'Guardado Correctamente',
    activities
  });
};

exports.updateActivity = async (req, res) => {
  try {
    const updated = await Activity.findByIdAndUpdate(
      req.params.id,
      {
        description: req.body.description,
        percentage: req.body.percentage,
        date: req.body.date
      },
      { new: true }
    );
    return res.status(200).json({
      status: 'Success', 
      msg: 'Actualizado Correctamente',
      updated
    })

  } catch (err) {
    res.status(500).json({ message: 'Error updating activity', error: err });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: 'Success', 
      msg: 'Eliminado Correctamente',

    })
  } catch (err) {
    res.status(500).json({ message: 'Error deleting activity', error: err });
  }
};

exports.getWeeklySummary = async (req, res) => {
  const { userId } = req.params;
  const activities = await Activity.find({ userId });

  let total = 0;
  let count = 0;
  activities.forEach(act => {
    total += act.percentage;
    count++;
  });

  const average = count ? total / count : 0;

  return res.status(200).json({
    status: 'Success', 
    msg: 'Obtenido Correctamente',
    total,
    count,
    average: average.toFixed(2)
  });
};