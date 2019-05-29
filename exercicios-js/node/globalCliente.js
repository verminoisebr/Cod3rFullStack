// import './global'; -> ES6 VERSION
require('./global.js')

console.log(MinhaApp.nome)

MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)

console.log(MinhaApp.saudacao())