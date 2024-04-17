let cart = [];
let modalQt = 1;
let modalKey = 0;

// Listagem dos hambúrgueres
burgerJson.map((item, index) => {
  let burgerItem = document
    .querySelector(".models .burger-item")
    .cloneNode(true);

  burgerItem.setAttribute("data-key", index);
  burgerItem.querySelector(".burger-item--img img").src = item.img;
  burgerItem.querySelector(
    ".burger-item--price"
  ).innerHTML = `R$ ${item.price[0].toFixed(2)}`;
  burgerItem.querySelector(".burger-item--name").innerHTML = item.name;
  burgerItem.querySelector(".burger-item--desc").innerHTML = item.description;

  burgerItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".burger-item").getAttribute("data-key");
    modalQt = 1;
    modalKey = key;

    document.querySelector(".burgerBig img").src = burgerJson[key].img;
    document.querySelector(".burgerInfo h1").innerHTML = burgerJson[key].name;
    document.querySelector(".burgerInfo--desc").innerHTML =
      burgerJson[key].description;
    document.querySelector(
      ".burgerInfo--actualPrice"
    ).innerHTML = `R$ ${burgerJson[key].price[3].toFixed(2)}`;
    document
      .querySelector(".burgerInfo--size.selected")
      .classList.remove("selected");
    document
      .querySelectorAll(".burgerInfo--size")
      .forEach((size, sizeIndex) => {
        if (sizeIndex == 3) {
          size.classList.add("selected");
        }
        size.querySelector("span").innerHTML = burgerJson[key].sizes[sizeIndex];
      });

    document.querySelector(".burgerInfo--qt").innerHTML = modalQt;

    document.querySelector(".burgerWindowArea").style.opacity = 0;
    document.querySelector(".burgerWindowArea").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".burgerWindowArea").style.opacity = 1;
    }, 200);
  });

  document.querySelector(".burger-area").append(burgerItem);
});

// sobremesasJson.map((item, index) => {
//   let sobremesasItem = document
//     .querySelector(".models .burger-item")
//     .cloneNode(true);

//   sobremesasItem.setAttribute("data-key", index);
//   sobremesasItem.querySelector(".burger-item--img img").src = item.img;
//   sobremesasItem.querySelector(
//     ".burger-item--price"
//   ).innerHTML = `R$ ${item.price.toFixed(2)}`;
//   sobremesasItem.querySelector(".burger-item--name").innerHTML = item.name;
//   sobremesasItem.querySelector(".burger-item--desc").innerHTML =
//     item.description;

//   sobremesasItem.querySelector("a").addEventListener("click", (e) => {
//     e.preventDefault();
//     let key = e.target.closest(".burger-item").getAttribute("data-key");
//     modalQt = 1;
//     modalKey = key;

//     document.querySelector(".burgerBig img").src = sobremesasJson[key].img;
//     document.querySelector(".burgerInfo h1").innerHTML =
//       sobremesasJson[key].name;
//     document.querySelector(".burgerInfo--desc").innerHTML =
//       sobremesasJson[key].description;
//     document.querySelector(
//       ".burgerInfo--actualPrice"
//     ).innerHTML = `R$ ${sobremesasJson[key].price.toFixed(2)}`;
//     document
//       .querySelector(".burgerInfo--size.selected")
//       .classList.remove("selected");
//     document
//       .querySelectorAll(".burgerInfo--size")
//       .forEach((size, sizeIndex) => {
//         if (sizeIndex == 3) {
//           size.classList.add("selected");
//         }
//         size.querySelector("span").innerHTML =
//           sobremesasJson[key].sizes[sizeIndex];
//       });

//     document.querySelector(".burgerInfo--qt").innerHTML = modalQt;

//     document.querySelector(".burgerWindowArea").style.opacity = 0;
//     document.querySelector(".burgerWindowArea").style.display = "flex";
//     setTimeout(() => {
//       document.querySelector(".burgerWindowArea").style.opacity = 1;
//     }, 200);
//   });

//   document.querySelector(".sobremesas-area").append(sobremesasItem);
// });

// Eventos do MODAL
function closeModal() {
  document.querySelector(".burgerWindowArea").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".burgerWindowArea").style.display = "none";
  }, 500);
}
// fechando o modal quando clicar no botão cancelar tanto para desktop quanto para mobile
document
  .querySelectorAll(
    ".burgerInfo--cancelButton, .burgerInfo--cancelMobileButton"
  )
  .forEach((item) => {
    item.addEventListener("click", closeModal);
  });
// decrementando a quantidade de hambúrgueres quando clicar no botão menos do modal
document.querySelector(".burgerInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    modalQt--;
    document.querySelector(".burgerInfo--qt").innerHTML = modalQt;
  }
});
// incrementando a quantidade de hambúrgueres quando clicar no botão mais do modal
document.querySelector(".burgerInfo--qtmais").addEventListener("click", () => {
  modalQt++;
  document.querySelector(".burgerInfo--qt").innerHTML = modalQt;
});
// alterando o tamanho e o preço do hambúrguer quando clicar no tamanho desejado
document.querySelectorAll(".burgerInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    document
      .querySelector(".burgerInfo--size.selected")
      .classList.remove("selected");
    size.classList.add("selected");
    document.querySelector(
      ".burgerInfo--actualPrice"
    ).innerHTML = `R$ ${burgerJson[modalKey].price[sizeIndex].toFixed(2)}`;
  });
});
// adicionando o hambúrguer ao carrinho quando clicar no botão adicionar ao carrinho
document
  .querySelector(".burgerInfo--addButton")
  .addEventListener("click", () => {
    let size = parseInt(
      document
        .querySelector(".burgerInfo--size.selected")
        .getAttribute("data-key")
    ); // capturou o tamanho do hamburger selecionado no modal e pegou o seu atributo data-key
    let identifier = burgerJson[modalKey].id + "@" + size; // criou um identificador para o hambúrguer para saber se ele já está no carrinho. Por exemplo: 1@2, onde 1 é o id do hambúrguer e 2 é o tamanho
    let key = cart.findIndex((item) => item.identifier == identifier); // verificou se o hambúrguer já está no carrinho. Caso o findIndex encontre o hambúrguer, ele retorna o índice do hambúrguer no carrinho, caso contrário, ele retorna -1
    if (key > -1) {
      // se tiver o hambúrguer no carrinho, ele incrementa a quantidade ao invés de adicionar um novo item
      cart[key].qt += modalQt;
    } else {
      // se não tiver o hambúrguer no carrinho, ele adiciona um novo item
      cart.push({
        identifier,
        id: burgerJson[modalKey].id,
        size,
        qt: modalQt,
      });
    }
    updateCart(); // atualiza o carrinho
    closeModal(); // fecha o modal
  });
// para mobile: abrindo o carrinho quando clicar no ícone do carrinho
document.querySelector(".menu-openner").addEventListener("click", () => {
  if (cart.length > 0) {
    document.querySelector("aside").style.left = "0";
  }
});
// para mobile: fechando o carrinho quando clicar no ícone fechar
document.querySelector(".menu-closer").addEventListener("click", () => {
  document.querySelector("aside").style.left = "100vw";
});
// função que atualiza o carrinho
function updateCart() {
  document.querySelector(".menu-openner span").innerHTML = cart.length; //para mobile: atualiza o número de itens no carrinho no ícone do carrinho. OBS: Se eu colocar 4 lanches do mesmo sabor e tamanho no carrinho, o ícone do carrinho vai mostrar 1, pois ele só conta a quantidade de itens no carrinho, não a quantidade de lanches

  if (cart.length > 0) {
    // se tiver itens no carrinho, ele mostra o carrinho
    document.querySelector("aside").classList.add("show");
    document.querySelector(".cart").innerHTML = ""; //limpa o carrinho para adicionar os itens novamente. Se não colocar essa linha, ele vai adicionar os itens no carrinho toda vez que adicionar um novo item e não vai limpar os itens antigos (ele vai concatenar os itens no carrinho e essa lógica está errada)

    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    for (let i in cart) {
      let burgerItem = burgerJson.find((item) => item.id == cart[i].id); //busca o hambúrguer no burgerJson pelo id. Se o id do hambúrguer no carrinho for igual ao id do hambúrguer no burgerJson, ele retorna o hambúrguer
      let priceIndex = cart[i].size; //pega o tamanho do hambúrguer no carrinho
      let burgerPrice = burgerItem.price[priceIndex]; // pega o preço do hambúrguer no burgerJson de acordo com o tamanho do hambúrguer no carrinho

      subtotal += burgerPrice * cart[i].qt; //calcula o subtotal do carrinho

      let cartItem = document // clona o modelo do item do carrinho que está no HTML
        .querySelector(".models .cart--item")
        .cloneNode(true);

      let burgerSizeName;
      switch (cart[i].size) {
        case 0:
          burgerSizeName = "apenas lanche";
          break;
        case 1:
          burgerSizeName = "P";
          break;
        case 2:
          burgerSizeName = "M";
          break;
        case 3:
          burgerSizeName = "G";
          break;
      }
      let burgerName = `${
        burgerItem.name
      } (${burgerSizeName}) R$${burgerPrice.toFixed(2)}`;

      cartItem.querySelector("img").src = burgerItem.img;
      cartItem.querySelector(".cart--item-nome").innerHTML = burgerName;
      cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt;
      cartItem
        .querySelector(".cart--item-qtmenos")
        .addEventListener("click", () => {
          if (cart[i].qt > 1) {
            cart[i].qt--;
          } else {
            cart.splice(i, 1);
          }
          updateCart();
        });
      cartItem
        .querySelector(".cart--item-qtmais")
        .addEventListener("click", () => {
          cart[i].qt++;
          updateCart();
        });

      document.querySelector(".cart").append(cartItem);
    }

    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    document.querySelector(
      ".subtotal span:last-child"
    ).innerHTML = `R$ ${subtotal.toFixed(2)}`;
    document.querySelector(
      ".desconto span:last-child"
    ).innerHTML = `R$ ${desconto.toFixed(2)}`;
    document.querySelector(
      ".total span:last-child"
    ).innerHTML = `R$ ${total.toFixed(2)}`;
  } else {
    // se não tiver itens no carrinho, ele esconde o carrinho
    document.querySelector("aside").classList.remove("show");
    document.querySelector("aside").style.left = "100vw";
  }
}

document.querySelector(".cart--finalizar").addEventListener("click", () => {
  if (cart.length > 0) {
    // Construindo a mensagem com os dados do pedido
    let mensagem = "Pedido:\n";
    cart.forEach((item) => {
      let burgerItem = burgerJson.find((burger) => burger.id == item.id);
      let burgerSizeName;
      switch (item.size) {
        case 0:
          burgerSizeName = "apenas lanche";
          break;
        case 1:
          burgerSizeName = "P";
          break;
        case 2:
          burgerSizeName = "M";
          break;
        case 3:
          burgerSizeName = "G";
          break;
      }
      mensagem += `${burgerItem.name} (${burgerSizeName}) - Quantidade: ${item.qt}\n`;
    });

    let subtotal = parseFloat(
      document
        .querySelector(".subtotal span:last-child")
        .innerHTML.replace("R$ ", "")
    );
    let desconto = parseFloat(
      document
        .querySelector(".desconto span:last-child")
        .innerHTML.replace("R$ ", "")
    );
    let total = parseFloat(
      document
        .querySelector(".total span:last-child")
        .innerHTML.replace("R$ ", "")
    );
    mensagem += `\nSubtotal: R$ ${subtotal.toFixed(
      2
    )}\nDesconto: R$ ${desconto.toFixed(2)}\nTOTAL: *R$ ${total.toFixed(
      2
    )}*\nTEMPO APROXIMADO DE ESPERA: *40 minutos*`;

    // Formatando a mensagem para URL
    let mensagemFormatada = encodeURIComponent(mensagem);

    // Construindo o link com a URI de compartilhamento do WhatsApp
    let linkWhatsApp = `https://wa.me/5516988753083?text=${mensagemFormatada}`;

    // Abrindo o link no navegador
    window.open(linkWhatsApp, "_blank");
  }
});
