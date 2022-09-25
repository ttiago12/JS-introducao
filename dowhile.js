function iniciar() {
  
  // solicitando um valor par a variavel num
  var num = prompt("Digite um numero ")

  //  declara a variavel de indice como 5
  var i = 5;

  // exibe os textos na tela
  document.write("<h1>Estruturas de controle</h1>");
  document.write("Contando ...");

  //  definição do dowhile, 
  // faça-enquanto o i for menor que o numero digitado pelo usuario
  do {
    document.write(" " + i); 
    i = i + 2;
    // ele executa essa parte no minimo uma vez
    // soma dois numeros ao i enquanto ele for menor igual ao num digitado
    //  mas se  o numero digitado for menor que 5 , ele vai executar o código 
    // uma vez e então para
    //  independente da condição (i <= num) é verdadeira ou falsa
    } while (i <= num);
}
