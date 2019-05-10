// FACTORY COM PARAMETROS
function criarProduto(nome, preco){
    return {
        nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('escova', 5.00))