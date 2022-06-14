import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  size: '',
  sort: {
    name: 'New Comers',
    sortProperty: SortPropertyEnum.ID_ASC
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
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

export const {setSearch, setSize, setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer