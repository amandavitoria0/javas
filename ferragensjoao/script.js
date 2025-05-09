function calcularPreco() {
    // Obtém o valor selecionado no campo <select> de produto
    const produto = document.getElementById('produto').value;

    // Converte a entrada de quantidade para número inteiro
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Obtém o valor atual do estoque (fixo neste caso)
    const estoque = parseInt(document.getElementById('estoque').value);

    // Seleciona o elemento onde o resultado será exibido
    const resultado = document.getElementById('resultado');

    // Verificação: se nenhum produto foi selecionado ou a quantidade é inválida
    if (!produto || isNaN(quantidade) || quantidade <= 0) {
        resultado.textContent = 'Por favor, selecione um produto e insira uma quantidade válida.';
        return; // Encerra a função se a verificação falhar
    }

    // Verifica se a quantidade solicitada ultrapassa o estoque disponível
    if (quantidade > estoque) {
        resultado.textContent = 'A quantidade solicitada excede o estoque disponível.';
        return; // Encerra a função se não houver estoque suficiente
    }

    // Dicionário com os preços de cada produto
    const precos = {
        parafuso: 0.5,             // Preço do parafuso: R$0,50
        martelo: 22.0,             // Preço do martelo: R$22,00
        'chave de fenda': 10.0     // Preço da chave de fenda: R$10,00
    };

    // Acessa o preço do produto selecionado
    const precoUnitario = precos[produto];

    // Calcula o total com base na quantidade
    const total = precoUnitario * quantidade;

    // Exibe o resultado formatado com detalhes
    resultado.innerHTML = `
        Produto: <strong>${produto}</strong><br>
        Quantidade: <strong>${quantidade}</strong><br>
        Preço unitário: <strong>R$ ${precoUnitario.toFixed(2)}</strong><br>
        <hr>
        <span style="font-size: 1.2rem;">Total: <strong>R$ ${total.toFixed(2)}</strong></span>
    `;
}
