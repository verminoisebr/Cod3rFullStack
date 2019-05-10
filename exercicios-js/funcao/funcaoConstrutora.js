function Carro(velocidadeMaxima = 200, delta = 5){
    //ATRIBUTO PRIVADO
    let velocidadeAtual = 0

    //METODO PUBLICO
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //METODO PUBLICO
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof uno)
console.log(typeof ferrari)