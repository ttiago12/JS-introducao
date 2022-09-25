////////FUNÇÃO LOGIN
function clicou() {
  //// SOLICITA O NOME
  var nome = prompt("x4_Arquivo Dialog JS - Qual o seu nome?", "Zé Ninguém");
  alert("Olá, " + nome.toUpperCase() + ".");
  //// ESCREVE NO ARQUIVO
  // document.write("<h1>Identificação</h1>"+"Ola " + nome );
  // utilizando containers
  // o nome
  resultado.innerHTML = "Olá, " + nome.toUpperCase() + " ";
 } 
 