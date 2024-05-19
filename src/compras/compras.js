
/*

Pensamento Algorítmico do problema:

1 - Receber a lista de ferramentas com o nome, preço e fabricante de cada item da lista;
2 - Receber a lista de compras com o nome dos itens que desejo comprar;
3 - Identificar o primeiro item da minha lista de compras;
4 - Verificar se o mesmo existe na minha lista de ferramentas;
5 - Caso as listas de compras e/ou ferramentas não possuam itens, a mensagem "Ambas as listas precisam ter ao menos um item." deve ser apresentada;
6 - Se existir o item de compra na lista de ferramentas, guardo o seu preço para somar ao valor total a ser pago pelos itens de compras;
7 - Para cada próximo item da minha lista de compras, verificar se o mesmo existe na minha lista de ferramentas;
8 - Se existir, somar o seu preço ao valor total a ser pago pelos itens de compras; 
9 - Senão existir, a mensagem "Nenhuma ferramenta desejada encontrada." deve ser apresentada;
10 - Quando não existirem mais itens na lista de compras para serem verificados na lista de ferramentas, apresentar a mensagem: 
"O valor a pagar pelas ferramentas (Nome da Ferramenta, Nome da Ferramenta, Nome da Ferramenta) é R$ 999.99", com o valor total a ser pago por 
todos os itens da lista de compras. 

*/

const calcularTotal = (ferramentas, comprar) => {
   
    const quantidadeDeFerramentas = ferramentas.length;

    const quantidadeDeItensParaComprar = comprar.length; 

    if (quantidadeDeFerramentas == 0 || quantidadeDeItensParaComprar == 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    };
    
    let totalApagar = 0.0;
    let ferramentasAComprar = [];
   
    for (let indiceComprar = 0; indiceComprar < quantidadeDeItensParaComprar; indiceComprar++){

        let itemEncontrado = false;
        
        for (let indice = 0; indice < quantidadeDeFerramentas; indice++) {        
        
        
            if (comprar[indiceComprar] == ferramentas[indice].nome) {
                totalApagar += ferramentas[indice].preco;
                ferramentasAComprar.push(ferramentas[indice].nome);
                itemEncontrada = true;
            }

        }
        
        if (!itemEncontrada) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }
 
    }

    if (ferramentasAComprar.length == 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    return `O valor a pagar pelas ferramentas (${ferramentasAComprar.join(', ')}) é R$ ${totalApagar.toFixed(2)}`;
}



module.exports = {
    calcularTotal
}
