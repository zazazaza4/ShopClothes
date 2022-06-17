import { createAsyncThunk } from '@reduxjs/toolkit';

import {Product, SearchPizzaParams} from './types';

import axios from 'axios';

import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchPizzaParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, search, category, currentPage, filter } = params;
    const { data } = await axios.get<Product[]>(`https://6293a80e7aa3e6af1a0f013a.mockapi.io/${category}`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 24,
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