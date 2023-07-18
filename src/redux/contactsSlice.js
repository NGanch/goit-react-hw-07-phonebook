
import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

// handle the pending action by updating the state
const handlePending = state => {
  state.isLoading = true;
};

// rejected action by updating the state
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// fetch contact action by updating the state
const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

// add contact action by updating the state
const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

// delete contact action by updating the state
const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
// initial state
const defaultContacts = {
  items: [],
  isLoading: false,
  error: null
};

// Створення slice контактів за допомогою createSlice
const contactsSlice = createSlice({

  name: 'contacts',
  initialState: defaultContacts,
    // Додаємо обробку зовнішніх екшенів
    // extraReducers: {
    //     [fetchContacts.pending]: handlePending,
    //     [fetchContacts.fulfilled](state, action) {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.items = action.payload;
    //     },
    //     [fetchContacts.rejected]: handleRejected,
    //     [addContact.pending]: handlePending,
    //     [addContact.fulfilled](state, action) {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.items.push(action.payload);
    //     },
    //     [addContact.rejected]: handleRejected,
    //     [deleteContact.pending]: handlePending,
    //     [deleteContact.fulfilled](state, action) {
    //       state.isLoading = false;
    //       state.error = null;
    //       const index = state.items.findIndex(
    //         task => task.id === action.payload.id
    //       );
    //       state.items.splice(index, 1);
    //     },
    //     [deleteContact.rejected]: handleRejected,

        
    //   },
    extraReducers:

    // builder callback
    builder =>
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFetchContacts)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleAddContact)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleDeleteContact)
        .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;