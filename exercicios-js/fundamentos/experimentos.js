let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// CRIANDO UMA VARIAVEL MALUCA: SEM VAR E LET
abc = 3 //NAO FAÇA ISSO EM CASA!!!
console.log(global.abc)

// module.exports = {e: 456, f: false, g: 'teste'}