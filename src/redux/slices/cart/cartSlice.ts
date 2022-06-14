import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { getCartFromLS } from '../../../utils/getCartFromLS';
import { calcTotalCount } from '../../../utils/calcTotalCount';
import { CartSliceState, CartItem } from './types';

const initialState: CartSliceState = getCartFromLS();

type ItemObj = {
  id: string;
  count?: number;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      //id
      const id =  action.payload.id + action.payload.color[0] + action.payload.size[0];
      //we are looking for item in our cart
      const findItem = state.items.find(obj => obj.id === id);
      // //if we found item, we added one more item
      if (findItem) {
        findItem.count = findItem.count + action.payload.count;
      } else {
        //if we found nothing
        state.items.push({
          ...action.payload,
          count: action.payload.count,
          id,
        });
      }
      //calculate total price & count
      state.totalCount = state.totalCount + action.payload.count;
      state.totalPrice = calcTotalPrice(state.items);
    },
    plusItem(state, action: PayloadAction<ItemObj>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
        state.totalCount = state.totalCount + 1;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    minusItem(state, action: PayloadAction<ItemObj>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem && action.payload.count && action.payload.count > 1) {
        findItem.count--;
        state.totalCount = state.totalCount - 1;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, action: PayloadAction<ItemObj>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalCount = calcTotalCount(state.items)
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addItem, minusItem, plusItem, removeItem,  clearItems } = cartSlice.actions

export default cartSlice.reducer