function calcular(){
    nome = parseFloat(document.formulario.nome.value);
    idade = parseFloat(document.formulario.idade.value);
    num1 = parseFloat(document.formulario.num1.value);
    num2 = parseFloat(document.formulario.num2.value);

    res1=num1+num2
    res2=num1-num2
    res3=num1*num2

    document.write("seu nome é: "+nome+"\n"); 
    document.write("sua idade é: "+idade+"\n");
    document.write("a soma dos numeros é: "+res1+"\n");
    document.write("a subtração dos numeros é: "+res2+"\n");
    document.write("a multiplicação dos numeros é: "+res3+"\n");
}