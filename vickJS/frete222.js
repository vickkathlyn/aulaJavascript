function calcular(){

    let preço = document.getElementById("preço").value;
    let resultado= "";

    if (preço>=50 && preço<100){
        resultado =preço-((preço*20)/100);
        document.getElementById("resultado").innerText = resultado;
        document.getElementById("desconto").innerHTML = "seu desconto é de 20%";
    }else 
    if (preço>=100 && preço<200){
        resultado =preço-((preço*30)/100);
        document.getElementById("resultado").innerText = resultado;
        document.getElementById("desconto").innerHTML = "seu desconto é de 30%";
    }else
    if (preço>=200 && preço <500){
        resultado =preço-((preço*40)/100);
        document.getElementById("resultado").innerText = resultado;
        document.getElementById("desconto").innerHTML = "seu desconto é de 40%";
    }else
    if (preço>=500){
        resultado =preço-((preço*50)/100);
        document.getElementById("resultado").innerText = resultado;
        document.getElementById("desconto").innerHTML = "seu desconto é de 50%";
    } else{
        document.getElementById("desconto").innerHTML = "não tem desconto para compras a baixo de 50 reais";
    
    }

    

}