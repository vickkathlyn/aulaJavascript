function calcular(){

    let preço = document.getElementById("preço").value;
    let codigo = document.getElementById("codigo").value;
    let resultado= "";

    switch (parseInt(codigo)){
        case 1:
            resultado =preço-((preço*20)/100);
            document.getElementById("resultado").innerText = resultado;
            document.getElementById("desconto").innerHTML = "seu desconto é de 20%";
            break;

        case 2:
            resultado =preço-((preço*30)/100);
            document.getElementById("resultado").innerText = resultado;
            document.getElementById("desconto").innerHTML = "seu desconto é de 30%";
            break;

        case 3:
            resultado =preço-((preço*40)/100);
            document.getElementById("resultado").innerText = resultado;
            document.getElementById("desconto").innerHTML = "seu desconto é de 40%";    
            break;
        case 4:
            resultado =preço-((preço*50)/100);
            document.getElementById("resultado").innerText = resultado;
            document.getElementById("desconto").innerHTML = "seu desconto é de 50%";
            break;
        case 5:
            document.getElementById("desconto").innerHTML = "não tem desconto para compras a baixo de 50 reais";
            break;
            
        default:
            document.getElementById("desconto").innerHTML = "desculpe, tente o codigo de 1 a 5";
    }
}    