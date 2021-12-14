import axios from "axios";

export class Users {
  private static baseUrl = "http://localhost:4000/api/v1/users";

  static async findAll() {
    try {
      const { data } = await axios.get(`${this.baseUrl}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllById(id: string) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
