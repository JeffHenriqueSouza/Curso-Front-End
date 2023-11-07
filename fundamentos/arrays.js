const valores = [7.7, 8.9, 3.3, 5.4]
console.log(valores [0], valores[3], valores[1], valores[2])
console.log(valores [4]) // nesse exemplo retorna um valor undefined pq nao existe esse indice no array.

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3},null,33,false,{celular: 31-982595653}) // o metodo push() acrescenta valores no array
console.log(valores)



const funcionario = [{id:10},{matricula:2789},{telefone:31982595653}]
console.log(funcionario)
console.log(funcionario[1])

console.log(funcionario.pop()) // o metodo pop() remove indices de um array

console.log(funcionario)
console.log(typeof valores)