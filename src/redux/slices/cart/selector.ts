// @ts-ignore
import { RootState } from '../store.ts';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj: any) => obj.id === id);