import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  size: '',
  color: '',
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
    setColor: (state, action) => {
      state.color = action.payload
    },
    setSize: (state, action) => {
      state.size = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
})

export const { setColor, setSize, setCategoryId } = filterSlice.actions

export default filterSlice.reducer