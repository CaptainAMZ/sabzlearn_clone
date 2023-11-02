import { createContext } from "react";
import {AuthContextType} from "../types"


const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  token: '',
  userInfos: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
