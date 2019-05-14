// PESSOA -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
pessoa.end = 'Rua People'
console.log(pessoa)

// PESSOA -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua 2pá'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Jorge'})
pessoaConstante.nome = 'Maria'
pessoaConstante.end = 'Rua 123'
console.log(pessoaConstante)
