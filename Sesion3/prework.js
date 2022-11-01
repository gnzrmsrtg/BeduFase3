const fs = require('fs')

fs.readFile(`${__dirname}/package.json`, function callback(err, file){
    setTimeout(function timeout2(){
        console.log(JSON.parse(file));
    }, 4000);
})

    console.log('Hello Event Loop');

setTimeout(function timeout(){
    console.log(`Hi, I'm executed`)
}, 5000)
