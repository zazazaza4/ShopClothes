import { calcTotalPrice } from './calcTotalPrice';
import { calcTotalCount } from './calcTotalCount';

import { CartItem } from '../redux/slices/cart/types';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const totalCount = calcTotalCount(items);

  return {
    items: items as CartItem[],
    totalPrice,
    totalCount
  };
};