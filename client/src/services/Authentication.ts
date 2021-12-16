import axios from "axios";
import { api } from "./api";

export class Authentication {
  static async register(username: string, email: string, password: string) {
    try {
      const data = await api.post("/register", {
        username,
        email,
        password,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async login(username: string, password: string) {
    try {
      const { data } = await api.post("/login", {
        username,
        password,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
