import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '../store/root-reducer';
import { formatPrice } from '../util/format';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) =>
    state.cart.products.map((product) => ({
      ...product,
      subtotal: formatPrice(
        product.discountedPrice !== null
          ? product.discountedPrice * product.amount
          : product.price * product.amount,
      ),
    })),
  );
  const total = useSelector((state: RootState) =>
    formatPrice(
      state.cart.products.reduce(
        (total, product) =>
          total +
          (product.discountedPrice !== null
            ? product.discountedPrice * product.amount
            : product.price * product.amount),
        0,
      ),
    ),
  );
  const totalItems = useSelector((state: RootState) =>
    state.cart.products.reduce((total, product) => total + product.amount, 0),
  );

  return (
    <div className="w-128 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden mt-4">
      <div className="p-6">
        <div className="flex justify-between items-baseline border-b pb-2">
          <div className="font-semibold text-lg">My cart</div>
          <div className="text-gray-600">{totalItems} items</div>
        </div>
        <ul className="flex flex-col mt-4">
          {totalItems === 0 && <div>Your cart is empty</div>}
          {cart.map((product) => (
            <li key={product.id} className="flex items-center py-4">
              <img
                className="w-16 h-16"
                src={product.image}
                alt={product.name}
              />
              <div className="flex-grow ml-4">
                <div>{product.name}</div>
                <div className="text-gray-600 text-sm">
                  Quantity: {product.amount}
                </div>
              </div>
              <div className="font-semibold">{product.subtotal}</div>
            </li>
          ))}
        </ul>
      </div>
      {totalItems > 0 && (
        <div className="bg-gray-100 p-6">
          <div className="flex justify-between items-center">
            <div className="font-bold text-green-500 text-lg">{total}</div>
            <div>
              <Link href="/cart">
                <a className="font-semibold text-gray-600">View cart</a>
              </Link>
              <Link href="/checkout">
                <a className="bg-green-500 font-semibold text-white rounded ml-6 px-3 py-2 hover:bg-green-600">
                  Finish order
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
