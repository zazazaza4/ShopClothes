import { createAsyncThunk } from '@reduxjs/toolkit';

import {Product, SearchPizzaParams} from './types';

import axios from 'axios';

import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchPizzaParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage, filter } = params;
    const { data } = await axios.get<Product[]>(`1https://6293a80e7aa3e6af1a0f013a.mockapi.io/product`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 8,
          category,
          sortBy,
          order,
          search,
          filter
        },
        identity,
      ),
    });

    return data;
  },
);