import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";

jest.mock("../../../src/firebase/providers");

describe("test in  AuthThunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("must of invoke the checkingcredentials", async () => {
    // checkingCredentials()
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
