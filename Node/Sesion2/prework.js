// Módulo FS para importar el sistema de manipulación de ficheros
const fs = require('fs')

// Método para crear un archivo
fs.appendFile('primerarchivo.html', 'primerarchivo', (err) => {
    if (err) throw err;
    console.log('Archivo creado satisfactoriamente')
})