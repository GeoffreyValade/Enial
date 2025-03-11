const Player = require('../models/Player');

exports.getPlayerById = (req, res, next) => {
  Player.findOne({ _id: req.params.id })
    .then(player => res.status(200).json(player))
    .catch(error => res.status(404).json({ error }));
};