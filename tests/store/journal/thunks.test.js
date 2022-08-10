import { startNewNot } from "../../../src/store/journal";

describe("Test in Jorunal Thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("startNewNot must create nre note in white", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid: uid } });
    await startNewNot()(dispatch, getState);
  });
});
