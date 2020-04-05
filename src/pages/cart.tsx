import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store/root-reducer';
import { updateAmount, removeFromCart } from '../store/ducks/cart';
import { formatPrice } from '../util/format';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) =>
    state.cart.products.map((product) => ({
      ...product,
      subtotal: formatPrice(
        product.discountedPrice
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
          (product.discountedPrice
            ? product.discountedPrice * product.amount
            : product.price * product.amount),
        0,
      ),
    ),
  );

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-2">
      <section className="py-12">
        <h2 className="font-semibold text-2xl">Your cart</h2>
        {cart.length > 0 ? (
          <div className="bg-white rounded shadow-md mt-8 p-6">
            <table className="w-full">
              <thead className="text-gray-600 text-left uppercase tracking-wide">
                <tr>
                  <th></th>
                  <th className="font-semibold">Product</th>
                  <th className="font-semibold">Qty</th>
                  <th className="font-semibold">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="w-48 py-6">
                      <img
                        className="w-32"
                        src={product.image}
                        alt={product.name}
                      />
                    </td>
                    <td className="py-6">
                      <div>{product.name}</div>
                      <div className="flex items-baseline">
                        {product.discountedPrice === null ? (
                          <>
                            <div className="font-bold text-green-500">
                              ${product.price}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="font-bold text-green-500">
                              ${product.discountedPrice}
                            </div>
                            <div className="text-sm text-gray-700 line-through ml-1">
                              ${product.price}
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex">
                        <button
                          className="focus:outline-none"
                          aria-label="Decrease product quantity"
                          onClick={() =>
                            dispatch(
                              updateAmount({
                                id: product.id,
                                amount: product.amount - 1,
                              }),
                            )
                          }
                        >
                          <svg
                            className="text-green-500 w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z" />
                          </svg>
                        </button>
                        <div className="text-center border mx-2 px-4">
                          {product.amount}
                        </div>
                        <button
                          className="focus:outline-none"
                          aria-label="Increase product quantity"
                          onClick={() =>
                            dispatch(
                              updateAmount({
                                id: product.id,
                                amount: product.amount + 1,
                              }),
                            )
                          }
                        >
                          <svg
                            className="text-green-500 w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold">{product.subtotal}</div>
                        <button
                          className="focus:outline-none"
                          aria-label="Remove product from cart"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <svg
                            className="text-green-500 w-4 h-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 19a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm5-17v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22zm-3 4v16H5V6H3v18h18V6h-2z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-end mt-8">
              <div>
                <div className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                  Total
                </div>
                <div className="font-semibold text-3xl text-green-500 leading-none">
                  {total}
                </div>
              </div>
              <Link href="/checkout">
                <a className="bg-green-500 font-semibold text-white rounded ml-4 px-3 py-2">
                  Go to checkout
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <div>Your cart is empty.</div>
            <Link href="/">
              <a className="font-semibold text-green-500 hover:text-green-600">
                Go back shopping
              </a>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
