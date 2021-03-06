import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import Cart from './cart';
import { RootState } from '../store/root-reducer';

const Header: React.FC = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.products.reduce((total, product) => total + product.amount, 0),
  );

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-2 py-4">
        <div className="flex justify-between">
          <Link href="/">
            <a className="flex items-center">
              <svg
                className="w-8 h-8 text-green-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M14 12c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.205 19.507a8.025 8.025 0 01-4.699-4.714l-1.02.127a9.015 9.015 0 005.592 5.606l.127-1.019zm.26-2.077a6.03 6.03 0 01-2.895-2.896l-1.041.13a7.016 7.016 0 003.807 3.807l.129-1.041zM16 12a4 4 0 10-8 0 4 4 0 008 0zm2.473-2.665a7.026 7.026 0 00-3.807-3.807l-.131 1.041a6.036 6.036 0 012.896 2.896l1.042-.13zm2.027-.253a9.01 9.01 0 00-5.582-5.568l-.129 1.019A8.027 8.027 0 0119.48 9.21l1.02-.128z" />
              </svg>
              <h1 className="font-semibold text-lg uppercase ml-4">Vinyland</h1>
            </a>
          </Link>
          <div className="flex items-center">
            <div className="relative group ml-8">
              <Link href="/cart">
                <a className="relative block">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M10 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.336-5l1.977-7H0l2.938 7h11.898zm4.969-10l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
                  </svg>
                  {totalItems > 0 && (
                    <div className="absolute bottom-0 right-0 bg-red-500 text-xs rounded-full w-4 h-4 flex justify-center items-center -mr-3">
                      {totalItems}
                    </div>
                  )}
                </a>
              </Link>
              <div className="absolute right-0 hidden hover:block group-hover:block">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
