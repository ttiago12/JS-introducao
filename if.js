
// /// função nomeada como inciar
function iniciar() {

  // SOLICITANDO UM NUMERO PARA CONFERENCIA DO IF
  var x = prompt("Digite um número?");
  

  // ESCREVE NA PÁGINA
  document.write("<h1>Estruturas de Controle- IF-ELSE IF e ELSE</h1>");

  //INCIO DAS EXTRUTURAS DE DECISÃO
  if (x > 5) {
    document.write("O valor de X é maior que cinco.<br>");
  } else if (x < 5) { 
    document.write("O valor de X é menor que cinco.<br>");
  } else { 
    document.write("O valor de X é igual a cinco.<br>"); 
  } 
  //FIM DAS EXTRUTURAS DE DECISÃO
}