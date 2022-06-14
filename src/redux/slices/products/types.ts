export type Product = {
    id: string;
    title: string;
    price: number;
    img: string;
    color: string[];
    sizes: string[];
    category: number[];
    decs: string;
  };
  
export enum Status {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}
  
export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
    filter: string;
};
  
export interface ProductsSliceState {
    items: Product[];
    status: Status;
}
