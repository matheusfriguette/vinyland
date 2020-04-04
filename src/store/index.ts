import { configureStore } from '@reduxjs/toolkit';

import { loadCart, saveCart } from './persisted-state';
import rootReducer from './root-reducer';

const persistedCart = loadCart();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: { cart: persistedCart },
});

store.subscribe(() => {
  saveCart(store.getState().cart);
});

export type StoreDispatch = typeof store.dispatch;

export default store;
