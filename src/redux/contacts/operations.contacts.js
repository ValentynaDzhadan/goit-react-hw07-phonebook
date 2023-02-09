import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactService,
  deleteContactService,
  getContacts,
} from 'services/contacts.service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (search, { rejectWithValue }) => {
    try {
      return await getContacts(search);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      return await addContactService(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactService(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
