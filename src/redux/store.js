import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
