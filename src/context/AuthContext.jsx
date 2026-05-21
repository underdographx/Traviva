import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../utils/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("travivaUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("travivaToken");

    if (!token) {
      setAuthReady(true);
      return;
    }

    apiRequest("/auth/me")
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("travivaUser", JSON.stringify(data.user));
      })
      .catch(() => {
        localStorage.removeItem("travivaToken");
        localStorage.removeItem("travivaUser");
        setUser(null);
      })
      .finally(() => setAuthReady(true));
  }, []);

  const login = (token, loggedInUser) => {
    localStorage.setItem("travivaToken", token);
    localStorage.setItem("travivaUser", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const logout = () => {
    localStorage.removeItem("travivaToken");
    localStorage.removeItem("travivaUser");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      authReady,
      isAuthenticated: Boolean(user),
      login,
      logout,
      user,
    }),
    [authReady, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
