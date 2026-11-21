
const temaSalvo = localStorage.getItem("tema");
const temaInicial = temaSalvo === "escuro" ? "escuro" : "claro";

document.documentElement.setAttribute("data-tema", temaInicial);

function atualizarBotaoTema(botao) {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    if (temaAtual === "escuro") {
        botao.textContent = "Tema claro";
        botao.setAttribute("aria-label", "Ativar tema claro");
        botao.setAttribute("aria-pressed", "true");
    } else {
        botao.textContent = "Tema escuro";
        botao.setAttribute("aria-label", "Ativar tema escuro");
        botao.setAttribute("aria-pressed", "false");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botaoTema = document.getElementById("Tema");

    if (!botaoTema) return;

    atualizarBotaoTema(botaoTema);

    botaoTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-tema");
        const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

        document.documentElement.setAttribute("data-tema", novoTema);
        localStorage.setItem("tema", novoTema);

        atualizarBotaoTema(botaoTema);
    });
});
