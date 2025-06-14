import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import produtosData from '../data/dbTeste.json';
import Header from "../components/header";
import Footer from '../components/footer';
import { GoArrowUpRight } from "react-icons/go";

const Produto = ({ adicionarAoCarrinho }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtosData.produtos.find(p => String(p.id) === id);

  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleComprar = () => {
    adicionarAoCarrinho({ ...produto, quantidade });
    navigate('/carrinho');
  };

  if (!produto) return <div>Produto não encontrado!</div>;

  return (
    <>
      <Header />
      <div className='container mx-auto px-4'>
          <div className='md:py-12 grid md:flex gap-4 mx-auto'>
            <div className='w-full md:w-1/2'>
              <img src={produto.imagem} className='w-full rounded-lg' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-4 p-4 md:p-12 rounded-lg'>
              <h1 className='font-bold text-2xl md:text-4xl '>{produto.nome}</h1>
              <p className='text-md md:text-xl'>{produto.descricao}</p>
              <p className='font-bold uppersase text-2xl'>R$ {produto.preco.toFixed(2)}</p>
              <span>Em até 12x sem juros</span>
              <div className='justify-between items-center flex'>
                <h4>Quantidade</h4>
                <div className='items-center border px-4 py-2 justify-between flex'>
                  <button onClick={diminuirQuantidade}>-</button>
                  <span className='px-6'>{quantidade}</span>
                  <button onClick={aumentarQuantidade}>+</button>
                </div>
              </div>
              <button
                onClick={handleComprar}
                className='justify-center bg-black hover:bg-black/90 text-white w-full py-4 flex gap-4 items-center'
              >
                COMPRAR AGORA <GoArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Produto;
