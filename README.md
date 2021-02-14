<h1>TODO-APP-API</h1>
<p>É um projeto proposto pelo Resília para criação de uma API Rest</p>

<h2> Inicialização do projeto</h2>
<p>Para inicializar o projeto coloque os comandos npm install, para que as dependencias sejam baixadas e depois npm start para da inicio ao nodemom</p>README.md

<h2>Rotas de acesso</h2>
<p>No projeto foi feito uma API REST utilizando os verbos HTTP GET, POST, DELETE e PUT</p>

<h2>Método GET</h2>
<p>Para acessar todos os dados de usuario ou tarefas utilileze a requisção GET</p>
<p>http://localhost:3001/usuario, http://localhost:3001/tarefas</p>
<p>Para acessar um dado especifico, coloca a rota >http://localhost:3001/usuario/id e depois o identificador do usuario ou tarefa, assim terá um retorno da mesmo<p>

<h2>Método POST</h2>
<p>Para adicionar uma tarefa ou um usuario, se usa a rota especifica no metodo post e no corpo se adiciona os dados da reqisição conforme o exemplo abaixo da rota usuario</p>

<p>{ 
    <br>
    nome: "exemplo"
    <br>
    email: "a@gmail.com"
    <br>
    senha: "335678"
    <br>
}</p>

<h2>Método DELETE</h2>
<p>Para deletar algum usuario ou tarefa coloca-se a rota especifica que deseja, e o id que do que se quer apagar no método DELETE</p>
<p>http://localhost:3001/usuario/id</p>

<h2>Método PUT</h2>
<p>Para se alterar um usuario ou tarefa, é preciso usar o método put e o localhost http://localhost:3001/usuario/id
 com identificador que deseja alterar, no corpo da requisicao coloca os dados a ser alterados. </p>

 <h2>Ferramentas utilizadas</h2>
 <ul>
 <li>express
 <li>body-parse
 <li>sqlite
 <li>cors
 </ul>

 <h2>Deploy</h2>
 <p>em andamento</p>
