
      function iniciar() {
        //informa que o carregamento foi finalizado
        alert("/script Carregamento finalizado");
        // escreve na página as seguintes informacoes
        document.write("<h1>" + document.title + "</h1>");
        document.write("Olá pessoal!<br>"); 
        
        //propriedades appName e appVersion, identifica o nome e a versão do navegador que o usuário está utilizando 
        document.write ("Você está utilizando o navegador " + navigator. appName + ", versão " + navigator.appVersion); 
      }

      function conta(){
        var num = prompt("Digite um numero")
        //exibe o numero e obriga que seja do formato float , caso não seja aparace "nAn"
        document.write("<h1>O numero digitado foi "+ parseFloat(num)+ "<br><h1>");
      }
