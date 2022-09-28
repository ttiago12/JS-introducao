
//  função com um paramentro chamado OP
// a operação que será feita é definida com esse parametro 
//  sendo que quando o usuario clicar em um dos botões , isso definirá um valor para o OP

function calc(op){

  if(op === '+'){
    res.value = parseFloat(v1.value) + parseFloat(v2.value);
  }
  else if (op === '-'){
    res.value = parseFloat(v1.value) - parseFloat(v2.value);
  }
  else if (op === '*'){
    res.value = parseFloat(v1.value) * parseFloat(v2.value) ;
  }
  else {
    if (parseFloat(v2.value) === 0)
     res.value = 'Erro!';
    else 
      res.value = parseFloat(v1.value) / parseFloat(v2.value); }
}