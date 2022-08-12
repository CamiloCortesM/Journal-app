import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";
import { startGoogleSingIn } from "../../../src/store/auth/thunks";

const mockstartGoogleSingIn = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSingIn: () => mockstartGoogleSingIn,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Test in LoginPage", () => {
  test("must show the correct component", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
    expect(container).toMatchSnapshot();
  });

  test("button of google must called startGoogleSingIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);

    expect(mockstartGoogleSingIn).toHaveBeenCalled();
  });
});
