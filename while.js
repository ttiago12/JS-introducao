function iniciar() {

  // utiliza a condição ate que chegue no numero 
  // que o usuario digitou
  
    var num = prompt("digite o numero")
    var i = 1;

    document.write("<h1>Estruturas de controle</h1>");
    document.write("Contando ...");

    while (i <= num) {
    document.write(" " + i); i++;
    } 
  }