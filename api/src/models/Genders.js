const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genders', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};