const frutas = ["Banana","Maça", "Laranja"]


for(i in frutas){
    console.log(frutas[i])
}


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,15]

const numerosPres = numeros.filter(numeros => numeros % 2 === 0)
console.log(numerosPres)


// ============================================================================

const obj =  {
    titulo: "ViVER",
    autor: "Jefferson",
    ano: 2023
}

console.log(obj)

// ============================================================================

const numero = 0
if(numero > 0 ){
    console.log("Numero positivo")
} else if (numero < 0 ){
    console.log("Numero negativo")
} else {
    console.log("Numero zero")
}


console.log(numero)


const idade = 6
if( idade < 18){
    console.log("Voce é menor de idade")
} else {
    console.log("Voce é maior de idade")
}

// ============================================================================

const numero3 = prompt("Digite um numero")

const numeroInteiro = parseInt(numero)

if (isNaN(numeroInteiro)) {
    console.log("Por favor, insira um número válido.");
  } else {
    // Exibir a tabuada usando um loop for
    console.log(`Tabuada do ${numeroInteiro}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numeroInteiro * i;
      console.log(`${numeroInteiro} x ${i} = ${resultado}`);
    }
  }


  // ============================================================================


