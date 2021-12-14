import { createContext, useContext } from "react";

type UserType = {
  username: string;
  email: string;
  password: string;
};

const baseUser = {
  username: "",
  email: "",
  password: "",
};

export type AuthContent = {
  user: UserType;
  setUser: (u: UserType) => void;
};

export const AuthContext = createContext<AuthContent>({
  user: baseUser,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
