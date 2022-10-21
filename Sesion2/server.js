const path = require('path')

// Esto sirve para modificar archivos
const fs = require('fs')

// Esto sirve para rutas de directorio
// const server = require(path.join(__dirname, '', 'server.js'))

// Estas funciones se hacen de forma asíncrona
// fs.writeFile(path.join(__dirname, '/ejemplo1.txt'), 'Este es mi archivo!!!', { encoding: 'utf-8' },
//     (error) => {
//         if (error) throw err
//         console.log('Archivo creado!!')
//     })

// fs.readFile(path.join(__dirname, '/ejemplo1.txt'), { encoding: 'utf-8' },
//     (error, data) => {
//         if (error) throw err
//         console.log(data)
//     })

// fs.appendFile(path.join(__dirname, '/ejemplo1.txt'), '\nNueva línea!!!', { encoding: 'utf-8' },
//     (error) => {
//         if (error) throw err
//         console.log('Archivo actualizado!!')
//     })

// Estas funciones se hacen de forma síncrona

fs.writeFileSync(path.join(__dirname, '/ejemplo1.txt'), 'Este es mi archivo!!!', { encoding: 'utf-8' })

data = fs.readFileSync(path.join(__dirname, '/ejemplo1.txt'), { encoding: 'utf-8' })
console.log('1', data)

fs.appendFileSync(path.join(__dirname, '/ejemplo1.txt'), '\nNueva línea!!!', { encoding: 'utf-8' })

data = fs.readFileSync(path.join(__dirname, '/ejemplo1.txt'), { encoding: 'utf-8' })
console.log('2', data)
