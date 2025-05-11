const texto = "Olá, bem-vindo ao meu portfólio!";
const elemento = document.getElementById("mensagem");
const intro = document.getElementById("intro");
const conteudo = document.getElementById("conteudo");
const temabotão = document.getElementById("tema-btn")
let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 80);
  } else {
    // Espera 1 segundo e inicia o fade-out
    setTimeout(() => {
      intro.classList.add("fade-out");
      setTimeout(() => {
        intro.style.display = "none";
        conteudo.classList.remove("hidden");
      }, 1500); // Tempo do fade-out
    }, 1000);
  }
}

const botaoTema = document.getElementById("tema-btn");

// Função para aplicar o tema salvo
function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("claro");
    botaoTema.textContent = "🌞";
  } else {
    document.body.classList.remove("claro");
    botaoTema.textContent = "🌙";
  }
}

// Aplica o tema salvo ao carregar
aplicarTemaSalvo();

// Alternar tema ao clicar no botão
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");

  // Atualiza o ícone
  if (document.body.classList.contains("claro")) {
    botaoTema.textContent = "🌞";
    localStorage.setItem("tema", "claro");
  } else {
    botaoTema.textContent = "🌙";
    localStorage.setItem("tema", "escuro");
  }
});
window.onload = digitar;
