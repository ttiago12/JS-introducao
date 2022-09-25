
// switch cased 
function iniciar() {
  
  // criando um objeto do tipo Date
  var hoje = new Date();

  // verificando
  alert(hoje);

  // O método getDay() retorna o dia da 
// semana para a data especificada de 
// acordo com a hora local, onde 0 representa o Domingo. Segunda 1 Fonte (https://developer.mozilla.org)
  var diaSemana = hoje.getDay();

  // verificando
  alert(diaSemana);
  var nomeDiaSemana = "";


// com a informação obtida do getDay , 
// é possivel exemplificar a utilização do switch case

  document.write("<h1>Estruturas de Controle</h1>");

  switch(diaSemana){ 
    case 0:
        nomeDiaSemana = "Domingo"; 
        break;
    case 1:
        nomeDiaSemana = "Segunda-feira";
        break; 
    case 2:
      nomeDiaSemana = "Terça-feira";
      break; 
    case 3:
      nomeDiaSemana = "Quarta-feira";
      break; 
    case 4:
      nomeDiaSemana = "Quinta-feira";
      break; 
    case 5:
      nomeDiaSemana = "Sexta-feira";
      break; 
    case 6:
    nomeDiaSemana = "Sábado"; 
  } 
  document.write ("Hoje é " + nomeDiaSemana); 
}