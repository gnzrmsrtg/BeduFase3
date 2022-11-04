const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      firstName: DataTypes.STRING,
      lastName1: DataTypes.STRING,
      lastName2: DataTypes.STRING,
      userRole: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: function (user, options) {
      user.createdAt = new Date();
      user.updatedAt = new Date();
    },
    beforeUpdate: function (user, options) {
      user.updatedAt = new Date();
    },
  },
});