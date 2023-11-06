const peso1 = 1.0
const peso2 = Number('2.0')

//  console.log(peso1,peso2)
//  console.log(Number.isInteger(peso1)) // o metodo isInteger serve para verificar se o numero é inteiro
//  console.log(Number.isInteger(peso2))

const avaliacaoJeff = 90.800
const avaliacaoJorge = 70.600

const somaAvaliacao = avaliacaoJeff + avaliacaoJorge

console.log(somaAvaliacao)
console.log(Number.isInteger(somaAvaliacao))

console.log(somaAvaliacao.toFixed(3)) // o metodo toFixed ele imprime a quantidade de casas decimas estipuladas depois do ponto.

console.log(somaAvaliacao.toString()) // o metdod toString tranforma o number em estring

console.log(typeof somaAvaliacao)