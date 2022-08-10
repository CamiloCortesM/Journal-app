import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { loadNotes } from "../../../src/helpers";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setsaving,
  startDeletingNote,
  startLoadingNotes,
  startNewNot,
  startSaveNote,
  startUploadingFiles,
  updateNote,
} from "../../../src/store/journal";

jest.mock("../../../src/helpers");

describe("Test in Jorunal Thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("startNewNot must create new note in white", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid: uid } });
    await startNewNot()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: "",
        title: "",
        id: expect.any(String),
        date: expect.any(Number),
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        title: "",
        id: expect.any(String),
        date: expect.any(Number),
      })
    );

    // delete to firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes/`);
    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });

  test("startLoadingNotes must called setNotes ", async () => {
    const notes = [
      {
        body: "esto es una prueba",
        date: 123546546,
        imageUrls: [],
        title: "Prueba",
      },
      {
        body: "esto es una prueba2",
        date: 92135135,
        imageUrls: [],
        title: "Prueba2",
      },
    ];
    const uid = "TEST-UID";
    await loadNotes.mockResolvedValue(notes);
    getState.mockReturnValue({ auth: { uid: uid } });

    await startLoadingNotes()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setNotes(notes));
  });

  test("startSaveNote must called setSaving and updateNote", async () => {
    const uid = "TEST-UID";
    const note = {
      id: "dasdasdsa",
      body: "esto es una prueba",
      date: 123546546,
      imageUrls: [],
      title: "Prueba",
    };
    getState.mockReturnValue({ auth: { uid: uid }, journal: { active: note } });
    await startSaveNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setsaving());
    expect(dispatch).toHaveBeenCalledWith(updateNote(note));
  });

  test("startUploadingFiles must called setsaving and setPhotosToActiveNote", async () => {
    await startUploadingFiles()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setsaving());
    expect(dispatch).toHaveBeenCalledWith(setPhotosToActiveNote([]));
  });

  test("startDeletingNote must called deleteNoteById", async() => {
    const uid = "TEST-UID";
    const note = {
      id: "dasdasdsa",
      body: "esto es una prueba",
      date: 123546546,
      imageUrls: [],
      title: "Prueba",
    };
    getState.mockReturnValue({ auth: { uid: uid }, journal: { active: note } });
    await startDeletingNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(deleteNoteById(note.id));
  });
});
