let burgerJson = [
  {
    id: 1,
    name: "Diinernífico",
    img: "images/burgers/Burger1.png",
    description:
      "Pão de brioche, hambúrguer de angus, queijo cheddar, bacon crocante, cebola crispy, alface, tomate, maionese de alho",
    tipo: "Um hambúrguer digno dos paladares mais exigentes, uma verdadeira obra-prima.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [28.0, 32.0, 35.0, 38.0],
  },
  {
    id: 2,
    name: "Diiner Tudo",
    img: "images/burgers/Burger2.png",
    description:
      "Pão artesanal, carne, queijo, bacon, ovo, presunto, alface, tomate, cebola caramelizada, molho especial",
    tipo: "Um delicioso hambúrguer para os gostos mais refinados e para os amantes de lanches artesanais.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [25.0, 29.0, 32.0, 35.0],
  },
  {
    id: 3,
    name: "Burger Heaven",
    img: "images/burgers/Burger3.png",
    description: "Pão, carne, queijo, bacon, alface, tomate, maionese",
    tipo: "Para os apaixonados por bacon, uma explosão de sabor.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [18.2, 22.2, 25.2, 28.2],
  },
  {
    id: 4,
    name: "Eggcellent Burgers",
    img: "images/burgers/Burger4.png",
    description: "Pão, carne, queijo, ovo, alface, tomate, maionese",
    tipo: "Perfeito para os amantes de ovos e lanches substanciais.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [16.8, 20.8, 23.8, 26.8],
  },
  {
    id: 5,
    name: "All-In Burger",
    img: "images/burgers/Burger5.png",
    description:
      "Pão, carne, queijo, bacon, ovo, alface, tomate, maionese, milho, ervilha, batata palha",
    tipo: "Para os que querem tudo em um só lanche, uma experiência completa.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [20.3, 24.3, 27.3, 30.3],
  },
  {
    id: 6,
    name: "Chicken Delight",
    img: "images/burgers/Burger6.png",
    description: "Pão, filé de frango, queijo, alface, tomate, maionese",
    tipo: "Leve e saboroso, perfeito para os amantes de frango.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [18.5, 22.5, 25.5, 28.5],
  },
  {
    id: 7,
    name: "Veggie Kingdom",
    img: "images/burgers/Burger7.png",
    description:
      "Pão integral, hambúrguer vegano, queijo vegano, alface, tomate, cebola roxa, maionese vegana",
    tipo: "Uma opção deliciosa e sustentável para os vegetarianos.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [19.0, 23.0, 26.0, 29.0],
  },
  {
    id: 8,
    name: "Prime Burger",
    img: "images/burgers/Burger8.png",
    description:
      "Pão, hambúrguer de picanha, queijo, bacon, alface, tomate, maionese",
    tipo: "Para os amantes de carnes nobres, uma experiência única.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [22.5, 26.5, 29.5, 32.5]
  },
  {
    id: 9,
    name: "Burger Palace",
    img: "images/burgers/Burger9.png",
    description: "Pão, carne, queijo, alface, tomate, maionese",
    tipo: "Um clássico irresistível para qualquer ocasião.",
    sizes: ["apenas lanche", "combo (P)", "combo (M)", "combo (G)"],
    price: [15.9, 19.9, 22.9, 25.9]
  },
  
];

let bebidasJson = [
    {
      id: 1,
      name: "Refrigerante",
      price: [5.0, 7.0, 9.0],
      description: "Lata de refrigerante (Coca-Cola, Pepsi, Guaraná)",
      tipo: "Refrescante e delicioso.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida1.png"
    },
    {
      id: 2,
      name: "Suco Natural",
      price: [6.5, 8.5, 10.5],
      description: "Suco natural de laranja, limão ou morango",
      tipo: "Opção saudável e refrescante.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida2.png"
    },
    {
      id: 3,
      name: "Água Mineral",
      price: [3.0, 4.0, 5.0],
      description: "Garrafa de água mineral sem gás",
      tipo: "Hidratação pura.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida3.png"
    },
    {
      id: 4,
      name: "Smoothie",
      price: [7.5, 9.5, 11.5],
      description: "Smoothie de frutas tropicais ou berries",
      tipo: "Refrescante e nutritivo.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida4.png"
    },
    {
      id: 5,
      name: "Chopp",
      price: [7.0, 9.0, 11.0],
      description: "Copo de chopp (300ml, 500ml, 700ml)",
      tipo: "Gelado e saboroso.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida5.png"
    },
    {
      id: 6,
      name: "Cerveja",
      price: [6.0, 8.0, 10.0],
      description: "Garrafa de cerveja nacional ou importada",
      tipo: "Para os apreciadores de uma boa cerveja.",
      sizes: ["150ml","300ml", "500ml", "700ml"],
      img: "images/bebidas/Bebida6.png"
    },
  ];
  

let sobremesasJson = [
  {
    id: 1,
    name: "Sundae",
    price: 9.0,
    description: "Sundae de chocolate, morango ou caramelo",
    tipo: "Uma explosão de sabor e doçura.",
    img: "images/sobremesas/Sobremesa1.png",
    sizes: ["tamanho único"]
  },
  {
    id: 2,
    name: "Torta de Maçã",
    price: 7.5,
    description: "Fatia de torta de maçã com canela",
    tipo: "Clássico e reconfortante.",
    img: "images/sobremesas/Sobremesa2.png",
    sizes: ["tamanho único"]
  },
  {
    id: 3,
    name: "Brownie",
    price: 6.5,
    description: "Brownie de chocolate com sorvete de baunilha",
    tipo: "Perfeito equilíbrio entre crocante e cremoso.",
    img: "images/sobremesas/Sobremesa3.png",
    sizes: ["tamanho único"]
  },
  {
    id: 4,
    name: "Cheesecake",
    price: 8.5,
    description: "Fatia de cheesecake com calda de frutas vermelhas",
    tipo: "Cremoso e irresistível.",
    img: "images/sobremesas/Sobremesa4.png",
    sizes: ["tamanho único"]
  },
  {
    id: 5,
    name: "Pudim",
    price: 5.5,
    description: "Pudim de leite condensado",
    tipo: "Tradicional e delicioso.",
    img: "images/sobremesas/Sobremesa5.png",
    sizes: ["tamanho único"]
  },
  {
    id: 6,
    name: "Milkshake",
    price: 8.0,
    description: "Milkshake de chocolate, morango ou baunilha",
    tipo: "Deliciosamente cremoso e indulgente.",
    img: "images/sobremesas/Sobremesa6.png",
    sizes: ["tamanho único"]
  },
];
