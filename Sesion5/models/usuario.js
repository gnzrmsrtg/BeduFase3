const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Content = require('./contenido')
const Comment = require('./comentarios')

const Usuario = sequelize.define('Autor', {
    firstName: {
        type: DataTypes.CHAR(255)
    },
    lastName: {
        type: DataTypes.CHAR(255)
    },
    profilePic: {
        type: DataTypes.CHAR(255)
    },
    bio: {
        type: DataTypes.TEXT()
    },
    rol: {
        type: DataTypes.CHAR(64)
    }
})

// Relación con el contenido (publicaciones)
Usuario.hasMany(Content)
Content.belongsTo(Usuario)

// Relación con el contenido (publicaciones)
Usuario.hasMany(Comment)
Comment.belongsTo(Usuario)

module.exports = Usuario