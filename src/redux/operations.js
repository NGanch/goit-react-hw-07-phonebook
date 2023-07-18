import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// axios.defaults.baseURL = "https://64b57ee9f3dbab5a95c76352.mockapi.io";
// https://64aac2950c6d844abedeca3b.mockapi.io
axios.defaults.baseURL = "https://64aac2950c6d844abedeca3b.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        // При успішному запиті повертаємо проміс із даними
        return response.data;
      } catch (e) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { text });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "tasks/deleteContact",
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

