function media(){
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value);
  var n4 = parseFloat(document.getElementById("n4").value);
  var media = parseFloat((n1 + n2 + n3 + n4) / 4);
  if (media >= 8.0) {
    document.getElementById("result").innerHTML = "<font color='blue'>Aprovado, media: " + media.toFixed(2);
  } 
  else {
    document.getElementById("result").innerHTML = "<font color='blue'>Reprovado, media: " + media.toFixed(2);
  }
  
}


// Revisão , Variáveis, strings, console.log para imprimir, toFixed para fixar os numeros, operações matemáticas.