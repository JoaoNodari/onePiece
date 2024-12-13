const botoes = document.querySelectorAll('.botao') // Pegar todas as div com a classe botao
const personagens = document.querySelectorAll('.personagem')

// Para usar o método addEventList é necessário percorrer toda a lista, então usamos o forEach
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao()

        botao.classList.toggle("selecionado")
        
        desselecionarPersonagem()

        personagens[indice].classList.toggle("selecionado")
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}