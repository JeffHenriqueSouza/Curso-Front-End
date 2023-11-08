const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'rua abc',
        numero: 20
    }

}

let global = pessoa 

console.log(global.endereco.numero)

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)
