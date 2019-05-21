const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS?
let resultado = []
resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    console.log (acumulador, atual)
    return acumulador && atual    
}, true)
console.log(resultado)

//RESOLUÇÃO PROFESSOR
const todosBolsistas = (result, bolsista) => result && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//DESAFIO 2: ALGUNS DOS ALUNOS É BOLSISTA?
let contador = 0
resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if (atual){
        contador++
    }
    return contador
}, false)

console.log(`${resultado} alunos são bolsistas `)

//RESOLUÇÃO PROFESSOR
const algumBolsista = (result, bolsista) => result || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

