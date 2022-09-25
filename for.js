function iniciar() {

  // fazendo o for contar de 0 ate o numero digitado
  var num = prompt("Digite um numero")
  document.write("<h1>Estruturas de Controle</h1>");
  //  define o numero inicial como zero 
  //  numero é impresso a cada laço do for
  

   for (var i = 0 ; i <= num ; i++){
    document.write("Contando ... " + i + "<br>"); 
  }
}