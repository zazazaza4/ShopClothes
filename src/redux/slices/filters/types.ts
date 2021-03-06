export enum SortPropertyEnum {
    ID_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
    searchValue: string;
    categoryName: string;
    currentPage: number;
    size: string,
    sort: Sort;
}
