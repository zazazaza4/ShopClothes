import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts} from './asyncActionsProducts';

const initialState = {
  items: [],
  status: 'LOADING'
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state ) => {
      state.status = 'LOADING';
      state.items = [];
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'SUCCESS';
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'ERROR';
      state.items = [];
    });
  },
})


export const { setItems } = productsSlice.actions

export default productsSlice.reducer