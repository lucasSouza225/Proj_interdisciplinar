// Começa com o índice 0, que representa o primeiro slide
let index = 0;

// Seleciona todos os elementos com a classe "slide" (os slides do banner, por exemplo)
let slides = document.querySelectorAll(".slide");

/**
 * Função que mostra apenas o slide correspondente ao índice 'i'
 * Remove a classe "active" de todos os slides e adiciona em apenas um
 */
function showSlide(i) {
  slides.forEach((slide, idx) => {
    // Remove a classe "active" de todos os slides
    slide.classList.remove("active");

    // Adiciona a classe "active" apenas no slide correspondente ao índice 'i'
    if (idx === i) slide.classList.add("active");
  });
}

// Define um intervalo que muda o slide a cada 4 segundos (4000 milissegundos)
setInterval(() => {
  // Atualiza o índice do slide, voltando ao primeiro quando chegar ao final
  index = (index + 1) % slides.length;

  // Chama a função para exibir o slide atual
  showSlide(index);
}, 4000);

/**
 * Adiciona um ouvinte de evento no botão do menu (hambúrguer)
 * Quando clicado, alterna a classe "active" no menu mobile
 */
document.getElementById("menuBtn").addEventListener("click", () => {
  // Seleciona o menu mobile
  let menu = document.getElementById("mobileMenu");

  // Alterna (ativa/desativa) a classe "active", para mostrar ou esconder o menu
  menu.classList.toggle("active");
});
