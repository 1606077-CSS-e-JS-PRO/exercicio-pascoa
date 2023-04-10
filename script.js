console.log("Teste")


function pegarValorNumericoDeInput(idInput) {
    console.log("Pegando valor...")

    const elementoInput = document.getElementById(idInput)
    const valorTexto = elementoInput.value

    if (valorTexto == "") {
        alert("Deu erro!")

        return
    }

    const valorNumerico = Number(valorTexto)

    return valorNumerico
}

let resultadoExterno = dividirDoisNumeros(15, 3)


/*
    dividirDoisNumeros
    Parametros: numeroUm numerico e numeroDois numerico
    Retorno:
    Retorna o resultado de uma divisão entre dois números
    OU -101 caso tente dividir por 0
*/

function dividirDoisNumeros(numeroUm, numeroDois) {
    let resultado = 0

    if (numeroDois != 0) {
        resultado = Number(numeroUm) / Number(numeroDois)
    } else {
        resultado = -101
    }

    return resultado
}


function executarSoma() {
    // Entradas
    // Dos elementos inputs do HTML

    const numeroUm = pegarValorNumericoDeInput("primeiroInput")
    const numeroDois = pegarValorNumericoDeInput("segundoInput")

    // Processamento
    let resultado = dividirDoisNumeros(numeroUm, numeroDois)

    // Saída
    // Lá na tela, onde tem o card exercicio
    const elResultadoSoma = document.getElementById("resultadoSoma")
    elResultadoSoma.innerHTML = resultado
}


async function executarPokemon() {
    // Entradas
    const elIdPokemon = document.getElementById("idPokemon")
    const idPokemonEscolhido = elIdPokemon.value

    // Processamento
    // Ir na API buscar o pokemon
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemonEscolhido}`
    const retornoFetch = await fetch(url)
    const pokemon = await retornoFetch.json()

    // Saida
    // console.log(pokemon)
    const elNomePokemon = document.getElementById("nomePokemon")
    const elImagemPokemon = document.getElementById("imagemPokemon")

    elNomePokemon.innerHTML = pokemon.name
    elImagemPokemon.src = pokemon.sprites.front_default
}
