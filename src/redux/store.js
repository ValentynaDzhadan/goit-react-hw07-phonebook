import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts/slice.contacts';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/slice.filter';
// ...

const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';

const persistContactsConfig = {
  key: LOCAL_STORAGE_CONTACTS_KEY,
  version: 1,
  storage: storage,
  whitelist: ['contactsData'],
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
