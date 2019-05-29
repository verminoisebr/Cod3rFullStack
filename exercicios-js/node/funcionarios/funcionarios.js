const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    
    const func = funcionarios.filter(getPais).filter(getGenero).reduce(menorValor)
    console.log(func)
})


//import axios from 'axios'; -> ES6 version

// DESAFIO: RETORNAR A MULHER CHINESA COM MENOR SALARIO
const getPais = e => e.pais === 'China'
const getGenero = e => e.genero === 'F'
const menorValor = function(acumulador, atual) {
    return atual.salario < acumulador.salario ? atual : acumulador
    }

