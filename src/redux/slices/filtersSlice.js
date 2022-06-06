import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  sizeId: 0,
  colorId: 0,
  currentPage: 1,
  sort: {
    name: 'New Comers',
    sortProperty: '-id'
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setColorId: (state, action) => {
      state.colorId = action.payload
    },
    setSizeId: (state, action) => {
      state.sizeId = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
})

export const { setColorId, setSizeId, setCategoryId } = filterSlice.actions

export default filterSlice.reducer