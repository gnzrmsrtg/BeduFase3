const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comentario', {
    comment: {
        type: DataTypes.TEXT()
    },
    rol: {
        type: DataTypes.CHAR(64)
    }
})

module.exports = Comment