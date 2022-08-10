import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSingIn } from "../../../src/store/auth/thunks";
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

  test("startGoogleSingIn must called checkingCredentials and login", async() => {
    const loginData = { ok: true, ...demoUser };

    await singInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  });

  test("startGoogleSingIn must called checkingCredentials and logout", async() => {
    const loginData = { ok:false, errorMessage:'Error' };

    await singInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSingIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
  });
});
