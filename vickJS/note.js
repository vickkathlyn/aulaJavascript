function calcular1(){
    notebook = parseFloat(document.formulario.notebook.value);

    if(notebook>=5){
        soma=notebook*1050;
        alert("o valor da compra é:"+soma);
    }
    else{
        soma=notebook*1200;
        alert("o valor da compra é:"+soma);
    }
}