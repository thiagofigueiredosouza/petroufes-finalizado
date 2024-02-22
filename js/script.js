// animação do header quando usar o scroll
window.addEventListener("scroll", function(){
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 0);
  })

// animação do menu hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const opcao1 = document.querySelector(".opcao-sobre");
const opcao2 = document.querySelector(".opcao-cronograma");
const opcao3 = document.querySelector(".opcao-palestrantes");
const opcao4 = document.querySelector(".opcao-patrocinadores");
const opcao5 = document.querySelector(".opcao-inscreva-se");

hamburger.addEventListener("click", () => 
  nav.classList.toggle("active")
);

opcao1.addEventListener("click", () => 
  nav.classList.toggle("active")
);

opcao2.addEventListener("click", () => 
  nav.classList.toggle("active")
);

opcao3.addEventListener("click", () => 
  nav.classList.toggle("active")
);

opcao4.addEventListener("click", () => 
  nav.classList.toggle("active")
);

opcao5.addEventListener("click", () => 
  nav.classList.toggle("active")
);

// animação dos patrocinadores
function trocaImagem(patrocinador) {
  let imagem = document.getElementById(patrocinador);

  imagem.addEventListener("mouseover", function() {
    imagem.src = "./img/patrocinadores/" + patrocinador + ".svg";
  });

  imagem.addEventListener("mouseout", function() {
    imagem.src = "./img/patrocinadores/" + patrocinador + "-cinza.svg";
  });
}

trocaImagem("ambipar");
trocaImagem("edhec");
// trocaImagem("crea");
trocaImagem("esoilgas");

// animação scroll lento
const menuItems = document.querySelectorAll('.nav-list a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// troca de cor do botão cronograma
var dia_1 = document.getElementById("dia-1");
var dia_2 = document.getElementById("dia-2");
var dia_3 = document.getElementById("dia-3");
var dia_4 = document.getElementById("dia-4");

var primeiroDia = document.getElementById("primeiro-dia");
var segundoDia = document.getElementById("segundo-dia");
var terceiroDia = document.getElementById("terceiro-dia");
var quartoDia = document.getElementById("quarto-dia");


function dia1() {
  segundoDia.style.display = "none";
  terceiroDia.style.display = "none";
  quartoDia.style.display = "none";
  primeiroDia.style.display = "block";

  dia_1.classList.add('selecionado');
  dia_2.classList.remove('selecionado');
  dia_3.classList.remove('selecionado');
  dia_4.classList.remove('selecionado');
}

function dia2() {
  primeiroDia.style.display = "none";
  terceiroDia.style.display = "none";
  quartoDia.style.display = "none";
  segundoDia.style.display = "block";

  dia_1.classList.remove('selecionado');
  dia_2.classList.add('selecionado');
  dia_3.classList.remove('selecionado');
  dia_4.classList.remove('selecionado');
}

function dia3() {
  primeiroDia.style.display = "none";
  segundoDia.style.display = "none";
  quartoDia.style.display = "none";
  terceiroDia.style.display = "block";

  dia_1.classList.remove('selecionado');
  dia_2.classList.remove('selecionado');
  dia_3.classList.add('selecionado');
  dia_4.classList.remove('selecionado');
}

function dia4() {
  primeiroDia.style.display = "none";
  segundoDia.style.display = "none";
  terceiroDia.style.display = "none";
  quartoDia.style.display = "block";

  dia_1.classList.remove('selecionado');
  dia_2.classList.remove('selecionado');
  dia_3.classList.remove('selecionado');
  dia_4.classList.add('selecionado');
}

// animação da seção dúvidas
const duvidas = document.querySelectorAll(".duvidas button");

function responder(event) {
  const duvida = event.currentTarget;
  const controls = duvida.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const verificaAtivo = resposta.classList.contains("ativo");
  duvida.setAttribute("aria-expanded", verificaAtivo);
}

function eventosDuvidas(duvida) {
  duvida.addEventListener("click", responder);
}

duvidas.forEach(eventosDuvidas);


// efeitos com ScrollReveal
window.sr = ScrollReveal({ reset: false });

// eventos
sr.reveal('.palestra', { 
  distance: '90px',
  duration: 2000,
  delay: 500 
});

sr.reveal('.minicurso', { 
  distance: '90px',
  duration: 2000,
  delay: 1000 
});

sr.reveal('.visita', { 
  distance: '90px',
  duration: 2000,
  delay: 1500 
});

// palestrantes
sr.reveal('.palestrante', {
  distance: '30px',
  duration: 1500,
  delay: 500
});

// patrocinadores
sr.reveal('.area-1', { 
  distance: '90px',
  duration: 2000,
  delay: 300 
});

sr.reveal('.area-2', { 
  distance: '90px',
  duration: 2000,
  delay: 600 
});

sr.reveal('.area-3', { 
  distance: '90px',
  duration: 2000,
  delay: 900 
});

// realização
sr.reveal('.area-spe', { 
  distance: '90px',
  duration: 2000,
  delay: 500 
});

sr.reveal('.area-rede', { 
  distance: '90px',
  duration: 2000,
  delay: 1000 
});