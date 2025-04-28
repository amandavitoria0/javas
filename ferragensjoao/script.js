

//pegar o valor do campo qtd
const precos={//dicionario
    "parafuso": 5,
    "martelo": 30,
    "chave de fenda":38,
}

{mostrarResultado()
    //valores
    let valor1 = 30;
    let valor2 = 150;
    let valor3 = 152;
    let resultado = valor1 + valor2 + valor3;
}


function calcularpreco(){
    let escolhaproduto = document.getElementById("produto").value; //
    let Quantidadedeproduto = document.getElementById("Quantidade").value;
    console.log(precos[escolhaproduto]*Quantidadedeproduto)
    
}  

