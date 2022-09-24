////////FUNÇÃO LOGIN
function login() {
  //// SOLICITA O NOME
  var nome = prompt("Arquivo Dialog JS - Qual o seu nome?", "Zé Ninguém");
  alert("Olá, " + nome.toUpperCase() + ".");
  //// ESCREVE NO ARQUIVO
  // document.write("<h1>Identificação</h1>"+"Ola " + nome );
  // utilizando containers
  resultado.innerHTML = "Olá, " + nome.toUpperCase() + " ";
 } 
 