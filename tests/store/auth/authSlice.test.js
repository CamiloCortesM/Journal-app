import { authSlice } from "../../../src/store/auth/authSilice";
import { initialState } from "../../fixtures/authFixtures";

describe("test in the authSlice", () => {
  test('must return the initialstate and "auth" called', () => {
    const state = authSlice.reducer(initialState, {});

    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);
  });
});
