import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filters/filtersSlice';
import products from './slices/products/productsSlice';
import cart from './slices/cart/cartSlice';

import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filters,
    products,
    cart
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
