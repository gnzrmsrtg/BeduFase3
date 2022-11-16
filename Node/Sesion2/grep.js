const path = require('path')
const fs = require('fs')

function grep() {
    data = fs.readFileSync(path.join(__dirname, '/input.txt'), { encoding: 'utf-8' })
    let totalCaracteres = data.length
    let totalLineas = 0, totalEspacios = 0

    // Si lo hacemos como arreglo (sin el encoding)
    // data.map(c => {
    //     if (c === 10) {
    //         totalLineas++
    //     } else if (c === 32) {
    //         totalEspacios++
    //     }
    // })

    // Si lo hacemos como string (con el encoding)
    for (i in data) {
        if (data.charCodeAt(i) === 10) {
            totalLineas++
        } else if (data.charCodeAt(i) === 32) {
            totalEspacios++
        }
    }
    
    console.log(`Número de caracteres: ${totalCaracteres}`)
    console.log(`Número de espacios: ${totalEspacios}`)
    console.log(`Número de líneas: ${totalLineas}`)
}

grep ()