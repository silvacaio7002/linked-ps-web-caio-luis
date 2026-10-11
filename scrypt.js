// Este JavaScript tem como ideia principal adicionar no máximo duas flores nas seções que contém as mesmas, porém em posições aleatórias, a fim de deixar algo mais visualmente atraente, apesar de ser um detalhe pequeno e muitas vezes inperceptível
const secoes = document.querySelectorAll(".flores-bg");

function criarFlor(lado){
    const flor = document.createElement("div");

    flor.classList.add("flor-decorativa");

    const tamanho = 600 + Math.random() * 300;


    // Define a posição horizontal conforme o lado
    const x = lado === "esquerda"
    ? 8 + Math.random() * 10
    : 92 + Math.random() * 10;

    // Posição vertical entre 10% e 90%
    const y = 1 + Math.random() * 70;
    // Define a rotação da flor, para não ficar tudo na mesma rotação
    const rotacao = Math.random() * 360;

    flor.style.setProperty("--tamanho",`${tamanho}px`);
    flor.style.setProperty("--x",`${x}%`);
    flor.style.setProperty("--y",`${y}%`);
    flor.style.setProperty("--rotacao",`${rotacao}deg`);

    flor.innerHTML = `
    <svg viewBox="-100 -100 200 200"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true">

        <g fill="none"
           stroke="#c9e1e8"
           stroke-width="7"
           stroke-linecap="round"
           stroke-linejoin="round">

            ${Array.from({ length: 5 }, (_, i) => `
                <path
                    d="M 0 0
                       C -18 -20 -20 -48 0 -65
                       C 20 -48 18 -20 0 0"
                    transform="rotate(${i * 72})"
                />
            `).join("")}

        </g>
    </svg>
`;
return flor;
}
secoes.forEach(secao => {
    secao.prepend(criarFlor("esquerda"));
    secao.prepend(criarFlor("direita"));
});