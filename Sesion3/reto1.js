const https = require('https')

function getNames() {
    console.log('Aguanta las carnes...')
}


function getSWAPI() {
    console.log('Cargando API...')
    setTimeout(() =>
    https.get('https://swapi.dev/api/people/', (resp) => {
        let data = ''
        resp.setEncoding('utf-8')
        resp.on('data', (chunk) => {
            data += chunk
        })
        
        resp.on('end', () => {
            let body = JSON.parse(data)
            console.log(body.results)
            getNames()
        }).on('Error', (err) => {
            console.log(err.message)
        })
    })
    , 2000)
}

getSWAPI()