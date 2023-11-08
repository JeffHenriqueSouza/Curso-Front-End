function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //precisa de pelo menos  um lor verdadeiro  para retorna o valor true
    const comprarTv50 = trabalho1 && trabalho2 // precisa de todos os valores verdadeiro  para retorna o valor true
    const comprarTv32 = trabalho1 != trabalho2 // esse compara se um valor é diferente de outro
    const manterSaudavel = !comprarSorvete // esse inverte o valor 
    return {comprarSorvete, comprarTv50,comprarTv32 ,manterSaudavel }

}

console.log( compras(true, true))