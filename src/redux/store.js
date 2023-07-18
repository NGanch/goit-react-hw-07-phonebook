import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Створення state-configureStore Redux
export const store = configureStore({
  reducer: {
    // Reducer для управління станом контактів
    contacts: contactsReducer,
    // Reducer для управління станом фільтру
    filter: filterReducer,
  },

});

//====================================