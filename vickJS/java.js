function calcular(){


    frete = parseFloat(document.formulario.frete.value);
    if (frete>=100){
        alert("0");
    }
    if(frete<100){
        resultado=frete*10/100
        alert(resultado);
    }
}