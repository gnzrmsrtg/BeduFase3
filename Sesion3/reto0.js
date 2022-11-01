// Ejemplo propio
function suma(a, b) {
    let result = a + b
    return console.log(result)
}

function getNumbers(a, b) {
    suma(a, b)
}

getNumbers(10, 5)


// Ejemplo de Andrés
let funcion = (num1, num2, callback) => {
    callback('Hola')
    let res = num1 + num2
    callback(res)
}

funcion(2, 5, (response) => console.log(response))