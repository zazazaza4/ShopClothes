import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filtersSlice';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filters,
    products,
    cart
  },
})
