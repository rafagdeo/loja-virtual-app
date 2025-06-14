import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Produto from "../pages/produto";
import Cart from "../pages/cart";

export default function MainRoutes() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(item => item.id === produto.id);
      if (itemExistente) {
        return prevCarrinho.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };
  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map(item =>
        item.id === produtoId
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };
  const removerDoCarrinho = (produtoId) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter(item => item.id !== produtoId)
    );
  };
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/produto/:id" element={<Produto adicionarAoCarrinho={adicionarAoCarrinho} />} />
      <Route path="/carrinho" element={<Cart carrinho={carrinho} atualizarQuantidade={atualizarQuantidade} removerDoCarrinho={removerDoCarrinho} />} />
    </Routes>
  );
}
