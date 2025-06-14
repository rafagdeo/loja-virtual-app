import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border mb-12">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <span className="font-bold text-xl">
          <Link to="/">Loja Virtual</Link>
        </span>
        {/* desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
           <Link to="/carrinho" className="hover:text-blue-600 transition flex gap-2 items-center">Carrinho <RiShoppingCart2Line /></Link>
        </nav>
        {/* mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
      {/* menu do mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-2 px-4 py-2">
            <li>
              <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
