// Requerimos Sequelize
const { Sequelize } = require('sequelize')

// Importamos los modelos
const productModel = require('../models/product')
const reviewModel = require('../models/review')
const userModel = require('../models/users')
const orderModel = require('../models/orders')

// Conexión con la base de datos
const sequelize = new Sequelize(
    'sesion6',
    'root',
    'Sterling2022+',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging: false
    }
)

// Obtenemos los modelos
const models = [ productModel, reviewModel, userModel, orderModel ]

// Registramos los modelos en Sequelize
for(let model of models)
    model(sequelize)

// Configurando relaciones
const { products, reviews } = sequelize.models;
reviews.belongsTo(products); // Relación uno a uno en la tabla reviews

module.exports = sequelize