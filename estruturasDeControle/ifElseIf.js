Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
    console.log('Nota de Honra')
    } else if(nota.entre(7,8)) {
        console.log('Aprovado')
    } else if(nota.entre(4,6)) {
        console.log('Reprovado')
    } else if(nota.entre(0,3)) {
        console.log("Recuperação")
    } else {
        console.log("Nota Invalida")
    }

}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)