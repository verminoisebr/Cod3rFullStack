// FUNCAO EM JS É FIRST-CLASS OBJECT (CITIZENS)
// HIGH-ORDER FUNCTION

// CRIAR DE FORMA LITERAL
function fun1() {}

// ARMAZENAR EM UMA VARIÁVEL
const fun2 = function () {}

// ARMAZENAR EM UM ARRAY
const array = [function (a, b){return a+b}, fun1, fun2]
console.log(array[0](2, 3))

//ARMAZENAR EM UM ATRIBUTO DE OBJETO
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// PASSAR FUNÇÃO COMO PARÂMETRO
function run (fun){
    fun()
}
run (function(){ console.log('Executando')})

// UMA FUNCAO PODE RETORNAR/CONTER UMA FUNÇÃO
function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)