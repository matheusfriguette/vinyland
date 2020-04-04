import { combineReducers } from '@reduxjs/toolkit';

import cart from './ducks/cart';

const rootReducer = combineReducers({
  cart: cart,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
