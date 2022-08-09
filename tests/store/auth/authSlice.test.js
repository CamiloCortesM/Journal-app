import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSilice";
import {
    authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("test in the authSlice", () => {
  test('must return the initialstate and "auth" called', () => {
    const state = authSlice.reducer(initialState, {});

    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);
  });

  test("must perform authentication ", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test(" must perform logout without arguments", () => {
    const state = authSlice.reducer(
      initialState,
      logout({ errorMessage: null })
    );
    expect(state).toEqual(notAuthenticatedState);
  });

  test("must perform logout and show errorMessage", () => {
    const errorMessage = "Credentials are incorrect";
    const state = authSlice.reducer(initialState, logout({ errorMessage }));
    const notAuthenticatedTest = {
      ...notAuthenticatedState,
      errorMessage,
    };

    expect(state).toEqual(notAuthenticatedTest);
  });
  test("must changed the state checking", () => {

    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe('checking')

  });
});
