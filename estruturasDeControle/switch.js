const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Nota de honra')
            break
        case 8:
        case 7:
            console.log('Aprovado') 
            break      
        case 6:
        case 5:
            console.log('Reprovado') 
            break 
        case 4: case 3: case 2:
            console.log('Recuperação') 
            break 
            default: console.log('Nota invalida')       
    }
    
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(3.3)
imprimirResultado(5)
imprimirResultado(-1)