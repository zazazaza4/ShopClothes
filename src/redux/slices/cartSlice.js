import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcTotalCount } from '../../utils/calcTotalCount';
import { getCartFromLS } from '../../utils/getCartFromLS';

const initialState  = getCartFromLS();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //we are looking for item in our cart
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      // //if we found item, we added one more item
      if (findItem) {
        findItem.count =+ action.payload.count;
      } else {
        //if we found nothing
        state.items.push({
          ...action.payload,
          count: action.payload.count,
        });
      }
      //calculate total price & count
      state.totalCount = state.totalCount + calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalCount = state.totalCount - calcTotalCount(state.items);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addItem, minusItem, removeItem,  clearItems } = cartSlice.actions

export default cartSlice.reducer