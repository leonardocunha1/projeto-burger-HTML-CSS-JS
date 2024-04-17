# Sistema de uma Hamburgueria

Um simples sistema de pedidos de hambúrguer construído com JavaScript e HTML/CSS.
Além do sistema de pedidos, há páginas destinadas para informar o usuário sobre a empresa e seus produtos.

## Funcionalidades gerais do site
- Menu responsivo para dispositivos móveis.
- Animações utilizando a biblioteca ScrollReveal.
- Componente de abas para mostrar conteúdos diferentes.

## Funcionalidades da página Fazer Pedido
- Visualização dos hambúrgueres disponíveis.
- Listagem dinâmica dos hambúrgueres disponíveis a partir de um array de dados (`burgerJson`).
- Adição de hambúrgueres ao carrinho de compras, com controle de quantidade e tamanhos.
- Atualização dinâmica do carrinho de compras.
- Finalização do pedido com envio para o WhatsApp.

## Como Usar
1. Clone este repositório em sua máquina local.
2. Abra o arquivo qualquer arquivo `html` em seu navegador preferido.

## Detalhes Técnicos

### Estrutura do Código

- `index.html`: Contém a estrutura HTML da página principal, incluindo os elementos de exibição dos hambúrgueres e do carrinho de compras.
- `sobre.html`: Contém a estrutura HTML da página com informações sobre a empresa.
- `cardapio.html`: Contém a estrutura HTML da página com o cardápio de hambúrgueres.
- `fazerpedido.html`: Contém a estrutura HTML da página para fazer um novo pedido.
- `styles.css`: Arquivo de estilos CSS para estilizar as páginas.
- `geral.js`: este JS lida mais com as partes dinâmicas do menu e está presente em todos os html's.
- `cardapio.js`: arquivo responsável por exibir o cardápio no `cardapio.html`.
- `fazerpedido.js`: arquivo JS responsável por toda a lógica de realizar o pedido e enviá-lo ao wpp.
- `index.js`: arquivo responsável pelas funcionalidades presentes na página inicial do site.
- `sabores.js`: arquivo onde há objetos que contêm os itens do cardápio.


## Contribuindo

Contribuições são bem-vindas! Se você encontrar um bug ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

