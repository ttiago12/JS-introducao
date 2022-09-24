

  ///////////// eu sou um comentario
  // alert("Ola, eu estou sim");
  ///////////// output
  // console.log("teste2");
  // document.write("Nutela");
  //////// input
  // prompt("Qual é");
  // guardar na var
var nome = prompt ("Digite Seu Nome");
alert("Bem vindo ao sistema " + nome);

var nota1 = prompt ("Digite a 1°");
var nota2 = prompt ("Digite a 2°");
var nota3 = prompt ("Digite a 3°");
var nota4 = prompt ("Digite a 4°");

var soma = (parseFloat(nota1)+
           parseFloat(nota2)+
           parseFloat(nota3)+
           parseFloat(nota4));

var media = soma/4 ;

document.write("A soma das notas é "+ soma + "<br>" ); 
document.write("A media das notas é "+ media + "<br>");

// se a media for menor que 6 reprovado
// se não APROVADO

////////////Condicionais
if(media < 6){
// se der verdade cai aqui 
document.write("REPROVADO");
}else{
//  se der falso cai aqui
document.write("APROVADO");
}

/////////////Arrays
var fruteira = ["Banana","uva","pera"];

/////criando objeto
var pessoa = {nome:"Maria" , idade: 28 , programadora: false}
////verificando atributo
pessoa.nome

var carro = {modelo : "RV", ano:2021, valor:150.00}
/// verificando atributo
carro.ano


///////////////////////////LOPING
    for(var i = 0;i < 10 ; i++){
      documento.write("sou a posição"+ i + "<br>")
    }

