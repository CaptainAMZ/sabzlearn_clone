import { useRoutes } from "react-router-dom";
import routes from "../routes.js";
import { useState, useEffect, useCallback } from "react";
import { AuthContext } from "../shares.js";
import { UserInfosType } from "../types.ts";

import "./App.css";

type LoginType = (userInfo: UserInfosType, token: string) => void;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [userInfos, setUserInfos] = useState<UserInfosType>(null);

  const login: LoginType = useCallback(
    (userInfo, token) => {
      setToken(token);
      setIsLoggedIn(true);
      setUserInfos(userInfo);
      localStorage.setItem("user", JSON.stringify({ token }));
    },
    [token]
  );
  const logout = useCallback((): void => {
    setIsLoggedIn(false);
    setToken("");
    setUserInfos(null);
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user")!);
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [login, logout]);

  const router = useRoutes(routes);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userInfos, login, logout }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
