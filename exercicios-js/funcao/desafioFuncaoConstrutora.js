/* class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() */

function Pessoa (nome){
    let _nome = nome

    this.falar = () => console.log(`Meu nome é ${_nome}`)    
    this.getName = () => _nome
}

const p2 = new Pessoa('Jorge')
p2.falar()
console.log(p2.getName())