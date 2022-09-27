// Ex007: Calculando a média de um aluno
function iniciar() {

  // utiliza a condição ate que chegue no numero 
  // que o usuario digitou
    
    alert("Bem vindo Ao site");
    frase.innerHTML = "<h1>Clique no botão para calcular a media<br>";
 }

function clicou() {
  //// SOLICITA O NUMERO
  // parseInt tranforma 

  //   o let é global
  //  var é global

  let n1 = parseInt(prompt("x7_Digite um Numero"));
  let n2 = parseInt(prompt("x7_Digite um Numero"));
  let n3 = parseInt(prompt("x7_Digite um Numero"));
  let n4 = parseInt(prompt("x7_Digite um Numero"));

  media = (n1+n2+n3+n4)/4;

  alert(media);
  frase.innerHTML = "<h1>Clique no botão para calcular a media<br>";
  result.innerHTML = "A media é : "+ media;
  //verificar o tipo de variavel
  alert(typeof media);

  //   NaN siginifica : Not a number (Não é um numero)
}