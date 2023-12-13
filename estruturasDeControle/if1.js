function SoBoaNotica(nota) {
    if(nota >=7) {

        console.log("Aprovado", + nota)
    }

}

SoBoaNotica(8.1)


function seForVerdadeEuFalo (valor) {

    if(valor) {
        console.log("É verdade", + valor)

    }

}
seForVerdadeEuFalo() // Falso
seForVerdadeEuFalo(null) // Falso
seForVerdadeEuFalo(undefined) // Falso
seForVerdadeEuFalo(NaN) // Falso
seForVerdadeEuFalo('') // Falso
seForVerdadeEuFalo(0) // Falso
seForVerdadeEuFalo(-1) // verdadeiro
seForVerdadeEuFalo(' ') // verdadeiro
seForVerdadeEuFalo('oi') // verdadeiro
seForVerdadeEuFalo([]) // verdadeiro
seForVerdadeEuFalo({}) // verdadeiro





