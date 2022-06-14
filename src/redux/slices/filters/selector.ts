// @ts-ignore
import { RootState } from '../store.ts';

export const selectFilter = (state: RootState) => state.filters;
export const selectSort = (state: RootState) => state.filters.sort;