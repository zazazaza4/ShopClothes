export type CartItem = {
  id: string;
  title: string;
  price: number;
  img: string;
  size: string;
  count: number;
  color: string;
};

export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}