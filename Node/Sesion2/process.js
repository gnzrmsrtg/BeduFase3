console.log(process.argv)
console.log(process.env)

console.log('Id del proceso:', process.id)
console.log('Variables de entorno:', process.id)

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));