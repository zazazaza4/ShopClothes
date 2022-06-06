import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search } = params;
    console.log(params, 4444);
    const { data } = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items`, {
      params: pickBy(
        {
          limit: 8,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);