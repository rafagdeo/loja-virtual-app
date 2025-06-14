import React from 'react';
import Header from "../components/header";
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; // Importe o ícone

const Cart = ({ carrinho, atualizarQuantidade, removerDoCarrinho }) => {
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const handleFinalizarPedido = () => {
    alert('Parabéns, você comprou!');
  };

  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <h2 className='text-center font-bold text-3xl'>Carrinho</h2>
        {carrinho.length === 0 ? (
          <div className='py-12 flex flex-col gap-4'>
            <p>Seu carrinho está vazio.</p>
            <div>
              <Link to="/" className='text-xl px-6 py-2 border border-gray-300 hover:bg-black hover:text-white'>Continuar comprando</Link>
            </div>
          </div>
        ) : (
          <div className='container md:w-[950px] mx-auto px-0 md:px-4 py-12'>
            <div className='hidden md:grid grid-cols-4 pb-4 border-b border-gray-400'>
              <p className='font-bold'>Produto</p>
              <p className='font-bold text-right'>Preço</p>
              <p className='font-bold text-right'>Quantidade</p>
              <p className='font-bold text-right'>Subtotal</p>
            </div>
            {carrinho.map(item => (
              <div
                key={item.id}
                className='flex flex-col md:grid md:grid-cols-4 gap-2 py-4 border-b border-gray-200 items-center'
              >
                {/* Produto */}
                <div className='flex items-center gap-2 w-full md:w-auto'>
                  <img src={item.imagem} className='w-20 rounded-lg' alt={item.nome} />
                  <h4 className='text-lg md:text-xl font-bold'>{item.nome}</h4>
                </div>
                {/* Preço */}
                <div className='flex md:block justify-between w-full md:w-auto text-right'>
                  <span className='md:hidden text-gray-500'>Preço:</span>
                  <span className='font-bold'>R$ {item.preco.toFixed(2)}</span>
                </div>
                {/* Quantidade */}
                <div className='flex md:block justify-between w-full md:w-auto text-right items-center'>
                  <span className='md:hidden text-gray-500'>Qtd:</span>
                  <div className='inline-flex items-center'>
                    <button
                      className='px-2'
                      onClick={() => atualizarQuantidade(item.id, Math.max(1, item.quantidade - 1))}
                    >-</button>
                    <span className='px-3'>{item.quantidade}</span>
                    <button
                      className='px-2'
                      onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                    >+</button>
                    {/* Ícone de lixeira */}
                    <button
                      className='px-2 text-red-500 hover:text-red-700'
                      onClick={() => removerDoCarrinho(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                {/* Subtotal */}
                <div className='flex md:block justify-between w-full md:w-auto text-right'>
                  <span className='md:hidden text-gray-500'>Subtotal:</span>
                  <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
              </div>
            ))}
            <h3 className='text-right font-bold text-xl mt-8'>Total: R$ {total.toFixed(2)}</h3>
            <div className='justify-between flex items-center py-8'>
              <Link to="/" className='text-md md:text-xl hover:underline'>Continuar comprando</Link>
              <button
                onClick={handleFinalizarPedido}
                className='text-md bg-black text-white px-6 py-2 hover:bg-black/80'
              >
                FINALIZAR PEDIDO
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
