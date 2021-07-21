function somar (){
    var primeiroElementoDaSoma = 0;
    var segundoElementoDaSoma  = 0;

    primeiroElementoDaSoma  = document.getElementById("A").value;
    segundoElementoDaSoma   = document.getElementById("B").value;

    primeiroElementoDaSoma_convertida  = parseFloat(primeiroElementoDaSoma);
    segundoElementoDaSoma_convertida   = parseFloat(segundoElementoDaSoma);

   alert(primeiroElementoDaSoma_convertida + segundoElementoDaSoma_convertida);

}

function subtrair() {
    var primeiroElementoDaSubtracao = 0;
    var segundoElementoDaSubtracao  = 0;

    primeiroElementoDaSubtracao  = document.getElementById("A").value;
    segundoElementoDaSubtracao   = document.getElementById("B").value;

    primeiroElementoDaSubtracao_convertida  = parseFloat(primeiroElementoDaSubtracao);
    segundoElementoDaSubtracao_convertida   = parseFloat(segundoElementoDaSubtracao);

   alert(primeiroElementoDaSubtracao_convertida - segundoElementoDaSubtracao_convertida);
   
}