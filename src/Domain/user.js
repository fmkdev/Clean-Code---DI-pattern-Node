const { DataTypes } = require('sequelize');
const sequelize = require('../Infrastructure/db');


const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;