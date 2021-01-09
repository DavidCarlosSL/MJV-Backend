<h1 align="center"> MJV <image src="https://mechapp.s3-sa-east-1.amazonaws.com/logo.png" height="32px" width="32px" /> </h1>
<br>
<h2> :dart: Objetivo </h2>
<p> Desenvolver o teste proposto pela MJV </p> <br>

<h2> :page_with_curl: Funcionalidades desenvolvidas </h2>
<ul>
  <li>Login</li>
  <li>Cadastro de usuário</li>
  <li>Lista de produtos</li>
  <li>Busca de produtos</li>
  <li>Paginação</li>
  <li>Menu de categorias</li>
</ul> <br>

<h2> :computer: Utilização sem Docker </h2>
<h3> :raised_hand: Requisitos </h3>
<ul>
  <li>Node 12+</li>
  <li>MySQL 5.7+</li>
  <li>Git</li>
</ul>
<h3> :envelope: Instruções </h3>
<p> Clone o repositório -> Dentro da pasta, dê o comando <i> npm install </i> -> 
Configure as variáveis de ambiente contidas nos arquivos <b> server.ts e db.ts </b> -> Dê o comando <i> npm run start </i>  
<br><br> :grey_exclamation: Observação: Por padrão a config synchronize no arquivo db.ts está como <i> true </i>. </p> <br>

<h2> :computer: Utilização com Docker </h2>
<h3> :raised_hand: Requisitos </h3>
<ul>
  <li>Docker</li>
  <li>docker-compose</li>
  <li>Git</li>
</ul>
<h3> :envelope: Instruções </h3>
<p> Clone o repositório -> Dentro da pasta, dê o comando <i> docker build . -t mjvgraphql:latest </i> -> Dê o comando <i> docker-compose up -d </i> 
<br><br> :grey_exclamation: Observações: </p>
<ul>
  <li> Por padrão a config synchronize no arquivo db.ts está como <i> true </i>. </li>
  <li> Por padrão a variável de ambiente POPULATE no docker-compose está definida como <i>'true'</i> </li>
</ul> <br>

<h2> :warning: Atenção </h2>
<p><b>O populate da base de dados é definido na variável de ambiente POPULATE, para popular é necessário definir essa variável como <i>'true'</i></b></p><br>

<h2> :thought_balloon: Exemplos </h2>
<p> Os exemplos de Queries e Mutations estão no arquivo <strong> ./examples.gql </strong></p> <br>

<h2> :mag_right: Tecnologias </h2>
<ul>
  <li> Node.js </li>
  <li> Apollo-server </li>
  <li> GraphQL </li>
  <li> TypeGraphQL </li>
  <li> MySQL </li>
  <li> TypeORM </li>
  <li> Inversify </li>
  <li> JWT </li>
</ul><br>
