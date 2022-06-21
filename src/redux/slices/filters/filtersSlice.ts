import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FilterSliceState, Sort } from './types';
import {getFiltersFromLS} from '../../../utils/getFiltersFromLocalStorage';

const initialState: FilterSliceState = getFiltersFromLS();

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    }
  },
})

export const {setSearch, setSize, setCategoryName, setSort } = filterSlice.actions

export default filterSlice.reducer