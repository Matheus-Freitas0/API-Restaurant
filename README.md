# API-Restaurant
Bem-vindo ao projeto de aplicação de gerenciamento de pedidos para um restaurante. Esta aplicação permite visualizar, criar, editar, excluir e concluir pedidos.

## Sobre

Este projeto é uma aplicação web que gerencia pedidos de um restaurante. Ele permite que você visualize uma lista de pedidos, adicione novos pedidos, edite pedidos existentes, exclua pedidos e marque pedidos como concluídos.

## Tecnologias

- **HTML**: Estrutura da página.
- **CSS**: Estilos personalizados e responsividade.
- **JavaScript**: Interatividade e manipulação de DOM.
- **Bootstrap 5**: Framework CSS para estilização e responsividade.
- **Node.js** (presumido): Backend para manipulação dos dados (se aplicável).

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Matheus-Freitas0/API-Restaurant` 

2.  **Navegue até o diretório do projeto:**

    `cd API-Restaurant` 
    
3.  **Instale as dependências :**

    `npm install` 
    
4.  **Inicie o servidor :**

    `npm start` 
    
5.  **Abra o navegador e acesse:**

    `http://localhost:3000` 
    

## Uso

-   **Visualizar Pedidos:** Navegue até a página principal para ver a lista de pedidos.
-   **Criar Pedido:** Preencha o formulário na página principal e clique em "Criar Pedido".
-   **Editar Pedido:** Clique no botão "Editar" ao lado de um pedido na lista.
-   **Excluir Pedido:** Clique no botão "Excluir" ao lado de um pedido na lista.
-   **Concluir Pedido:** Clique no botão "Concluir" para marcar um pedido como concluído.

## Estrutura do Projeto

/src

|-- /public

|   |-- /css

|   |   |-- style.css

|-- /views

|   |-- pedidos.ejs

|-- /routes

|   |-- pedidos.js

|-- /models

|   |-- pedido.js

|-- /controllers

|   |-- pedidoController.js

|-- app.js

|-- package.json

|-- README.md` 

-   **`/public/css/style.css`**: Arquivo CSS para estilos personalizados.
-   **`/views/pedidos.ejs`**: Template para a visualização dos pedidos.
-   **`/routes/pedidos.js`**: Rotas para gerenciamento de pedidos.
-   **`/models/pedido.js`**: Modelo de dados para pedidos (se usar um banco de dados).
-   **`/controllers/pedidoController.js`**: Lógica de controle para operações de pedidos.
-   **`app.js`**: Arquivo principal do aplicativo (se aplicável).
-   **`package.json`**: Dependências e scripts do projeto.

## Contribuição

Se você quiser contribuir para este projeto, siga estas etapas:

1.  **Faça um Fork do Repositório.**
    
2.  **Crie uma Branch para sua Feature:**
   
    `git checkout -b minha-feature` 
    
3.  **Faça Commit das Suas Alterações:**

    `git commit -am 'Adiciona nova feature'` 
    
4.  **Faça Push para a Branch:**

    `git push origin minha-feature` 
    
5.  **Abra um Pull Request.**
    

## Licença

Este projeto está licenciado sob a Licença MIT.
