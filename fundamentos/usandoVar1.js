{
    {
        {
            {
                var sera = "sera?" // aki o var pode ser exibido tanto dentro do escopo quanto fora globalmente
                console.log(sera)
            }
        }
    }
}
console.log(sera)


function teste() {  // dentro de uma funcao o var não pode ser exibido globalmente
    var local = 123
    console.log(local)
}
teste()


