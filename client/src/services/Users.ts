import axios from "axios";
import { decode } from "jsonwebtoken";
import { api } from "./api";

export class Users {
  static async findAll() {
    try {
      const { data } = await api.get("/users");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllById(id: string) {
    try {
      const { data } = await api.get(`/users/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async recoverUserInfoById(token: string) {
    try {
      const { id }: any = decode(token);
      const { data } = await api.get(`/users/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
