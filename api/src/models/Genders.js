const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genders', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
    });
};