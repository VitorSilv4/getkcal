# getkcal

Este é um projeto com o intuíto apenas de estudar javaScript puro.

## Instalação

Este projeto não precisa de nenhuma depedência para funcionar, porém iremos utilizar o pacote `serve` para roda-lo no browser através de um servidor node. Apenas para que possamos testá-lo em tempo real em outros dispositivos, sem a necessidade de ter que baixar os arquivos nos outros dispositivos.

Sinta-se a vontade caso queira rodar este projeto direto no seu browser clicando com o botão direito no arquivo `index.html` e, em seguida, selecionando a opção `Abrir Com` e selecionando o navegador de sua preferência.

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  $ git clone https://gitlab.com/project-portfolio/getkcal.git
```

## Executando a aplicação

Para executá-la é muito simples, basta rodar os seguintes comandos:
```sh
  $ cd getkcal/app # para acessar a pasta clonada do git
  $ npm init -y # inicializando o package.json
  $ npm install serve -D # instalando o serve como dependência de desenvolvimento
  $ npx serve . # rodando o servidor node
```