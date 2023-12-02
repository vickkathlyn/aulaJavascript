function calcular(){


    frete = parseFloat(document.formulario.frete.value);
    if (frete>=100){
        document.write("o frete vai ser: 0");
    }
    if(frete<100){
        resultado=frete*10/100;
        document.write("o frete vai ser: ",resultado);
    }
}