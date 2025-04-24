

//pegar o valor do campo qtd
const precos={//dicionario
    "parafuso": 5,
    "martelo": 30,
    "chave de fenda":38,
}


function calcularpreco(){
    let escolhaproduto = document.getElementById("produto").value; //
    let Quantidadedeproduto = document.getElementById("Quantidade").value;
    console.log(precos[escolhaproduto]*Quantidadedeproduto)
    
}  

