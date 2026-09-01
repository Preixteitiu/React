import Produto from "./Produto";

function Produtos() {
    return (
        <section className="produtos">
            <h2>Nossos produtos</h2>
        <Produto 
        nome = 'Espresso'
        preco = '18,99'
        descricao = 'teste descrição' />
        
        <Produto 
        nome = 'Capuccino'
        preco = '15,99'
        descricao = 'teste descrição 2' />
        
        <Produto 
        nome = 'Chocolate' 
        preco = '10,99'
        descricao = 'teste descrição'  />

        </section>
    );
}

export default Produtos;