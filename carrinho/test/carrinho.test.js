import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 0.5, 1);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');

    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);
    expect(carrinho.frete).toBe(10);
  });

  it('Deve calcular o total', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(20);

    expect(carrinho.calculaTotal()).toBe(35);
  })

  it('Deve finalizar as compras com sucesso', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      frete: 10,
      subtotal: 15,
      total: 25,
    });
  });
});
