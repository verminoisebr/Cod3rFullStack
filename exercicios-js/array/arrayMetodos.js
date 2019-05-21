const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //MASSA QUEBROU O CARRO
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //REMOVE O PRIMEIRO
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//SPLICE PODE ADICIONAR E REMOVER ELEMENTOS
// ADICIONAR

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//REMOVER
pilotos.splice(3, 1) // MASSA QUEBROU :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // NOVO ARRAY
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)