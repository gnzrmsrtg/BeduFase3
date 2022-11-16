function sumarFn(num1, num2) {
    console.log(num1 + num2)
}

function restarFn(num1, num2) {
    console.log(num1 - num2)
}

function multiplicaFn(num1, num2) {
    console.log(num1 * num2)
}

function divideFn(num1, num2) {
    console.log(num1 / num2)
}

random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

module.exports = {
    sumarFn,
    restarFn,
    multiplicaFn,
    divideFn,
    random
}