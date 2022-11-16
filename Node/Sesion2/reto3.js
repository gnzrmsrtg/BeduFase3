const https = require('https')
const fs = require('fs');
const path = require('path')

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = ''
        resp.setEncoding('utf-8')
        resp.on('data', (chunk) => {
            data += chunk
        })

        resp.on('end', () => {
            let body = JSON.parse(data)
            console.log(body.title)
            console.log(body.explanation)
            console.log(body.url)

            // Aquí descargamos la imagen
            let url = body.url
            let file = fs.createWriteStream(path.join(__dirname, body.title + '.png'))
            https.get(url, res => res.pipe(file), console.log('Imagen descargada!!!'))

        }).on('Error', (err) => {
            console.log(err.message)
        })
    })
}

getAPOD()