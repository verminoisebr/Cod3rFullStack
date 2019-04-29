let valor //NAO INICIALIZADA
console.log(valor)

valor = null //AUSENCIA DE VALOR
console.log(valor)
//console.log(valor.toString()) //ERRO DE TIPO

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //EVITE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //SEM PREÇO
console.log(!!produto.preco)
console.log(produto)