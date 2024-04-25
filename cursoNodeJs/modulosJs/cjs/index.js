// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

//CommonJS require module
const { count } = require('node:console');
const { sum } = require('./sum')
console.log(sum(1,2));

