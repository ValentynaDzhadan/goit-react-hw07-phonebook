import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState.contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact: (state, action) => {
      state.contactsData = [...state.contactsData, action.payload];
    },
    removeContact: (state, action) => {
      state.contactsData = state.contactsData.filter(
        el => el.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addNewContact, removeContact } = contactsSlice.actions;
