import { CartState } from './ducks/cart';

export const loadCart = (): CartState => {
  if (typeof window === 'undefined') {
    return {
      products: [],
    };
  }

  const serializedCart = localStorage.getItem('cart');

  if (serializedCart === null) {
    return {
      products: [],
    };
  }

  return JSON.parse(serializedCart);
};

export const saveCart = (cart: CartState): void => {
  if (typeof window !== 'undefined') {
    const serializedCart = JSON.stringify(cart);

    localStorage.setItem('cart', serializedCart);
  }
};
