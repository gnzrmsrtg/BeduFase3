const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Content = sequelize.define('Contenido', {
    title: {
        type: DataTypes.CHAR(255)
    },
    content: {
        type: DataTypes.CHAR(255)
    },
    category: {
        type: DataTypes.CHAR(255)
    },
    autor: {
        type: DataTypes.TEXT()
    }
})

module.exports = Content