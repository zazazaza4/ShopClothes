import { CartItem } from "../redux/slices/cart/types";

export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) =>  obj.count + sum, 0);
};