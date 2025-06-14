import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import produtosData from './data/dbTeste.json';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold uppercase text-center'>Conheça nossos produtos</h1>
        <div className='py-12 grid lg:grid-cols-4 grid-cols-2 gap-4'>
          {produtosData.produtos.map(produto => (
            <div className='rounded-md border border-gray-200' key={produto.id}>
              <Link to={`/produto/${produto.id}`}>
                <img src={produto.imagem} className='w-full'/>
                <div className='p-4'>
                  <h3 className='font-bold text-lg'>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className='flex pt-4 justify-between items-center'>
                    <span>R${produto.preco.toFixed(2)}</span>
                    <button className='hover:underline'>Comprar</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
