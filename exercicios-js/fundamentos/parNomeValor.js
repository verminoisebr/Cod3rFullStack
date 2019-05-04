// PAR NOME/VALOR
const saudacao = 'Opa' // CONTEXTO LÉXICO 1

function exec(){
    const saudacao = 'Falaaa' // CONTEXTO LÉXICO 2
    return saudacao
}

// OBJETOS SÃO PGRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numer: 123
    }
}

console.log(saudacao)
console.log(exec())