const WeekSummary = require('../models/WeekSummary');

exports.createWeekSummary = async (req, res) => {
    try {
      const week = new WeekSummary(req.body);
      await week.save();
      return res.status(200).json({
        status: "Success",
        week
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "Error", msg: "Error al guardar semana" });
    }
  };
  
  exports.getSummariesByUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const weeks = await WeekSummary.find({ user: userId }).sort({ createdAt: -1 });
      return res.status(200).json({
        status: "Success",
        weeks
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "Error", msg: "Error al obtener historial de usuario" });
    }
  };