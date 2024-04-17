let burgerArea = document.querySelector(".burgers-area");
let bebidasArea = document.querySelector(".bebidas-area");
let sobremesasArea = document.querySelector(".sobremesas-area");

burgerJson.forEach((item, index) => {
  let insereBurger = `
    <div class="burger">
        <div class="burger-img-area content-area">
            <img class="burger-img content-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="burger-infos content-infos">  
            <p class="burger-nome content-nome">${index+1} - ${item.name}</p>
            <p class="burger-descricao content-descricao">${item.tipo}</p>
            <p class="burger-ingredientes content-descricao">Ingredientes: ${item.description}</p>
        </div>
    </div>`;
  burgerArea.insertAdjacentHTML("beforeend", insereBurger);
});

bebidasJson.forEach((item, index) => {
    let insereBebida = `
    <div class="drinks">
        <div class="drink-img-area content-area">
            <img class="drink-img content-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="drink-infos content-infos">
            <p class="drink-nome content-nome">${index+1} - ${item.name}</p>
            <p class="drink-descricao content-descricao">${item.tipo}</p>
            <p class="drink-ingredientes content-descricao">Descrição: ${item.description}</p>
        </div>
    </div>`;
    bebidasArea.insertAdjacentHTML("beforeend", insereBebida);
});

sobremesasJson.forEach((item, index) => {
    let insereSobremesa = `
    <div class="sobremesas">
        <div class="sobremesa-img-area content-area">
            <img class="sobremesa-img content-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="sobremesa-infos content-infos">
            <p class="sobremesa-nome content-nome">${index+1} - ${item.name}</p>
            <p class="sobremesa-descricao content-descricao">${item.tipo}</p>
            <p class="sobremesa-ingredientes content-descricao">Descrição: ${item.description}</p>
        </div>`
    sobremesasArea.insertAdjacentHTML("beforeend", insereSobremesa);
});
