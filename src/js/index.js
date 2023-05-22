const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTemaSol = document.querySelector(".botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTemaSol.setAttribute("src", "./src/imagens/imagens/sun.png");

    } else {

        imagemBotaoTrocaDeTemaSol.setAttribute("src", "./src/imagens/imagens/moon.png");
    }   

});
