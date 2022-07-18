import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    // active: null,
    active: {
      id: "ABC123",
      title: "",
      body: "",
      date: 1234567,
      imageUrls: [], // https://foto.jpg, https://foto3.jpg
    },
  },
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setsaving: (state) => {},
    updteNote: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setsaving,
  updteNote,
  deleteNodeById,
} = journalSlice.actions;
