
    function low() { 
      alert("Carregamento finalizado");
      //String devem ser especificados entre aspas simples (') ou duplas (").
      var x = "Olá!";
      document.write("<h1>Variáveis em JavaScript</h1>");
      
      document.write("A variável agora é String: " + x + "<br>");
      // Valores numéricos, por sua vez, não possuem delimitadores.
      //  Como separador decimal, deve-se utilizar o caractere de ponto final (.)
      
       x = 12 + 13;
      document.write("Agora é do tipo de dados inteiro: " + x + "<br>");
       x = 4.50 + 5.25;
      document.write("Neste momento é float: " + x + "<br>"); }
