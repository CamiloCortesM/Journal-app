import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
  startGoogleSingIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("test in  AuthThunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("must of invoke the checkingcredentials", async () => {
    // checkingCredentials()
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSingIn must called checkingCredentials and login", async () => {
    const loginData = { ok: true, ...demoUser };

    await singInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSingIn must called checkingCredentials and logout", async () => {
    const loginData = { ok: false, errorMessage: "Error" };

    await singInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWithEmailPassword must called checkingCredentials and login", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout must called logoutFirebase,clearnotes and logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  test("startCreatingUserWithEmailPassword must called and dispatch with login and checkingcredentials ", async () => {
    const createData = { ok: true, ...demoUser };

    await registerUserWithEmailPassword.mockResolvedValue(createData);

    await startCreatingUserWithEmailPassword({
      email: demoUser.email,
      password: "123456",
      displayName: demoUser.displayName,
    })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login({ uid:createData.uid, displayName:createData.displayName, email:createData.email, photoURL:createData.photoURL }))
  });
});
