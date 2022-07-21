import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "ABC123",
    //   title: "",
    //   body: "",
    //   date: 1234567,
    //   imageUrls: [], // https://foto.jpg, https://foto3.jpg
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setsaving: (state) => {
      state.isSaving = true;
      //TODO: mensaje de error...
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        return note.id === action.payload.id ? action.payload : note;
      });
      //TODO: Mostrar mensaje de actualizacion
    },
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNodeById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setsaving,
  updateNote,
} = journalSlice.actions;
