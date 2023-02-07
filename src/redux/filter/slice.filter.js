import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState.filter';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilterAction } = filterSlice.actions;
