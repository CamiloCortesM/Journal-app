import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FireBaseAuth } from "../firebase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { login, logout } from "../store/auth";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FireBaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  if (status === "checking") return <CheckingAuth />;
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
