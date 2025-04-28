const User = require('../models/User');

exports.createUser = async (req, res) => {
  const user = await User.create({ name: req.body.name });

  return res.status(200).json({
    status: 'Success', 
    msg: 'Guardado Correctamente',
    user
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({
    status: 'Success', 
    msg: 'Obtenidos Correctamente',
    users
  });

};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
  return res.status(200).json({
    status: 'Success', 
    msg: 'Actualizado Correctamente',
    user
  });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    status: 'Success', 
    msg: 'Eliminado Correctamente',
  });
};