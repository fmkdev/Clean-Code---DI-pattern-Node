const { Sequelize } = require('sequelize');
const config = require('../../db.json');

const sequelize = new Sequelize(config['development']);

module.exports = sequelize;