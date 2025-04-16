let martelo = 19.99;

//pegar o valor do campo produto

//pegar o valor do campo qtd
const precos={//dicionario
    "parafuso": 5,
    "martelo": 30,
    "chave de fenda":38,
}


function p(){
    let escolhaproduto = document.getElementById("produto").Value;
    let Quantidadedeproduto = document.getElementById("Quantidade").Value;
    console.log(preços[escolhaproduto]*Quantidadedeproduto)
    
}  
