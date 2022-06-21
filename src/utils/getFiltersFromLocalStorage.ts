import { SortPropertyEnum } from '../redux/slices/filters/types';

export const getFiltersFromLS = () => {
  const category = localStorage.getItem('category');
  const categoryName = category ? JSON.parse(category) : 'product';

  return {
    searchValue: '',
    categoryName,
    currentPage: 1,
    size: '',
    sort: {
      name: 'New Comers',
      sortProperty: SortPropertyEnum.ID_ASC
    }
  };
};
