import { api } from "./api";

export class Posts {
  static async findAll() {
    try {
      const { data } = await api.get("/posts");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllByUserId(id: string) {
    try {
      const { data } = await api.get(`/posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllById(id: string) {
    try {
      const { data } = await api.get(`/post/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
