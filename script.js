console.log("Teste")


function executarSoma() {
    // Capturar os elementos para usar depois
    const toast = document.getElementById("toast")
    const elResultadoSoma = document.getElementById("resultadoSoma")
    const saidaExterna = document.getElementById("saidaExterna")
    saidaExterna.innerHTML = "<br>"

    // Reset
    toast.style.display = "none"
    elResultadoSoma.innerHTML = 0

    // Entradas
    // Dos elementos inputs do HTML
    const primeiroInput = document.getElementById("primeiroInput")
    const segundoInput = document.getElementById("segundoInput")

    const primeiroNumero = primeiroInput.value
    const segundoNumero = segundoInput.value

    // Validação
    if (primeiroNumero == "" || segundoNumero == "") {
        toast.style.display = "block"

        return
    }

    // Processamento
    const resultado = Number(primeiroNumero) + Number(segundoNumero)

    // Saída
    // Lá na tela, onde tem o card exercicio
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
