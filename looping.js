
  ///////////////////////////LOPING
  // for(var i = 0; i < 10 ; i++){
  //     document.write("sou a posição" + i + "<br>");
  //   }

  var numero = prompt("Digite o numero que deseja multiplicar")
  var mult = prompt("Digite até quanto quer multiplicar")
    /////CHAMANDO A FUNÇÃO
    calTab(numero,mult)


    ////FUNÇÃO RECEBE DOIS PARAMETROS
  function calTab (numero, mult){
    for(var i = 0; i <= mult ; i++){
    document.write(numero + " x " + i +"=" + (numero * i) + "<br>");
  }
  }

