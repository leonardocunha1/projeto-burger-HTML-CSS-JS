const nav = document.querySelector(".menu-principal");
const menu = document.querySelector(".mobile-menu-icon-button");
const btnOpenModal = document.querySelector(".mobile-menu");
const btnCloseModal = document.querySelector(".mobile-menu-close-btn");
const overlay = document.querySelector(".overlay");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// fazendo o menu do celular aparecer e desaparecer
const openMenu = function () {
  //   btnOpenModal.style.display = "flex";
  overlay.classList.remove("hidden");
  btnOpenModal.style.right = "0";
};

const closeMenu = function () {
  overlay.classList.add("hidden");
  btnOpenModal.style.right = "-300px";
};

menu.addEventListener("click", openMenu);
btnCloseModal.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// fazendo o menu do celular e o overlay desaparecer quando a tela for redimensionada para mais de 768px independente do menu estar aberto ou não
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    overlay.classList.add("hidden");
    btnOpenModal.style.right = "-300px";
  }
});

// fazendo o aba selecionada no menu ficar laranja e com a classe "active"
document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual da URL
  var menuItems = document.querySelectorAll(".menu nav .menu-info .menu-item"); // Seleciona todos os itens do menu
  let menuMobile = document.querySelectorAll(".mobile-menu .menu-item");

  // Itera sobre os itens do menu desktop para verificar se a página corresponde ao link e adiciona a classe "active"
  menuItems.forEach(function (item) {
    if (item.getAttribute("href") === currentPage) {
      item.style.color = "#f26820";
      item.style.transition = "none";
      item.classList.add("active");
    }
  });

  // Itera sobre os itens do menu mobile para verificar se a página corresponde ao link e adiciona a classe "active"
  menuMobile.forEach(function (item) {
    if (item.getAttribute("href") === currentPage) {
      item.style.color = "black";
      item.style.fontWeight = "bold";
      item.style.borderBottom = "3px solid black";
    }
  });
});


// Menu fade animation (efeito de opacidade no menu quando o mouse passa por cima de um link)
const handleHover = function (e) {
    // função que define o comportamento do menu quando o mouse passa por cima ou sai de cima de um link
    if (e.target.classList.contains('menu-item')) {
      // verifica se o elemento que disparou o evento tem a classe nav__link
      const link = e.target; // pega o elemento que disparou o evento. por exemplo o link do menu que o mouse passou por cima
      const siblings = link.closest('.menu').querySelectorAll('.menu-item'); // pega todos os links do menu. Para isso, ele procura pelo elemento pai do link que disparou o evento que tenha a classe menu e depois pega todos os elementos com a classe menu-item que estão dentro desse elemento pai através do querySelectorAll
  
      siblings.forEach(el => {
        // para cada link do menu, ele verifica se é o link que disparou o evento. Se for, ele deixa a opacidade do link que disparou o evento em 1, ou seja, 100%. Se não for, ele deixa a opacidade do link que não disparou o evento em 0.5, ou seja, 50%
        if (el !== link) el.style.opacity = this; // this é o valor que foi passado para a função handleHover através do bind. Nesse caso, o valor é 0.5 quando o mouse passa por cima de um link e 1 quando o mouse sai de cima de um link
      });
    }
  };

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); // quando o mouse passa por cima do menu, ele executa a função handleHover com o valor 0.5
nav.addEventListener('mouseout', handleHover.bind(1)); // quando o mouse sai de cima do menu, ele executa a função handleHover com o valor 1


