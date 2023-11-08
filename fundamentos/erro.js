function tratrarErrorELancar (erro) {
    throw "mensagem de erro"
}

function imprimirNomeGritado (obj) {
    try {   // Try serve quando da algum erro 
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) { // o cacth serve para tratar o erro 
        tratrarErrorELancar() 
    } finally { // finaly serve para finalizar
        console.log("Final")
    }
}
 const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)