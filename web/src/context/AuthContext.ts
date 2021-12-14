import { createContext, useContext } from "react";

type IUser = {
  username: string;
  password: string;
};

const baseUser = {
  username: "",
  password: "",
};

export type AuthContent = {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
};

export const AuthContext = createContext<AuthContent>({
  user: baseUser,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
