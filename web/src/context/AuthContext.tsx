import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

import { Authentication } from "../services/Authentication";
import { Users } from "../services/Users";
import { api } from "../services/api";

type IUser = {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  coverPicture: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type ISignInData = {
  username: string;
  password: string;
};

type IAuthContext = {
  isAuthenticated: boolean;
  user: IUser | null;
  signIn: (data: ISignInData) => Promise<void>;
};

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { "geek.token": token } = parseCookies();

      if (token) {
        await Users.recoverUserInfoById(token).then((response) => {
          setUser(response);
        });
      }
    })();
  }, []);

  async function signIn({ username, password }: ISignInData) {
    const data = await Authentication.login(username, password);

    setCookie(undefined, "geek.token", data?.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${data?.token}`;

    setUser(data?.user);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
