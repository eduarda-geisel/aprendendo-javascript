let num = 1;
const produtos = [
    {id: 1, nome: 'mouse', preco: 55, estoque: 10},
    {id: 2, nome: 'teclado', preco: 159, estoque: 15},
    {id: 3, nome: 'monitor', preco: 200, estoque: 11},
    {id: 4, nome: 'computador', preco: 995, estoque: 20},
    {id: 5, nome: 'mousepad', preco: 30, estoque: 30}
];

if(num === 1){
    function listar(){
        console.table(produtos);
    }
}
listar();

function adicionar({id, nome, preco, estoque}){
    const novoProduto = { id: produtos.length + 1, nome, preco, estoque };
    produtos.push(novoProduto);
    listar();
}
        
adicionar({id: 6, nome: 'webcam', preco: 150, estoque: 25});
listar();