// Llamamos a express
const express = require('express')

// Importamos Sequelize desde db.js
const sequelize = require('./config/db');

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Mi API</h1>')
})

app.use('/api', require('./routes'))

// Revisamos la conexión con la DB
try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB')
} catch (error) {
    console.log('Unable to connect to DB:', error)
}

// Activamos el Puerto
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server listening on PORT ${PORT}`);
});