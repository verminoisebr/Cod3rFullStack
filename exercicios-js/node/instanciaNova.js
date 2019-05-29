// UMA FACTORY RETORNA UM NOVO OBJETO

module.exports = () => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}

/* export default () => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
} */ // -> ES6 version