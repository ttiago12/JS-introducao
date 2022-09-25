function exibir() {
  var montadora = new Array("Fiat", "Ford", "General Motors",
   "Honda", "Nissan", "Renault", "Volkswagen");
  
   

   document.write("<h1>Montadoras</h1>");

   // a propriedade lenght contem o tamanho do Array montadora
  //  especifíca o número de elementos em um array.
   for (i = 0; i < montadora.length; i++) 
   alert(montadora.length);
   document.write (montadora[i] + "<br>" + i);
  }