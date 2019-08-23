const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs-express', 'root', 'socerfotb', {
  dialect: 'mysql',
  host: 'localhost'});

  module.exports = sequelize;