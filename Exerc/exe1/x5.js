///SOLICITA O NUMERO E MOSTRA O DOBRO E A DIVISÃO DELE.
// Ex005: Manipulando números


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
 
 function iniciar() {

  // utiliza a condição ate que chegue no numero 
  // que o usuario digitou
  
    alert("Bem vindo Ao site")
 }

 function clicou() {
  //// SOLICITA O NUMERO
  var num = prompt("x5_Digite um Numero");


  
  //// ESCREVE NO ARQUIVO
  // document.write("<h1>Identificação</h1>"+"Ola " + nome );
  // utilizando containers
  // o nome
  outro.innerHTML = "O numero é " + num;
  resultado.innerHTML = "O dobro é " + (num * 2) + " e a metade é "+ (num/2);
 } 