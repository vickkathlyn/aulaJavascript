function calcular(){
    num = parseFloat(document.formulario.num.value);

    if (num==0){
        alert("é 0")
    }
    if(num>0){
        alert("esse numero é postivo")
    }
    if(num<0){
        alert("esse numero é negativo")
    }
}