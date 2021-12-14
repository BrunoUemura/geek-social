import axios from "axios";

export class Authentication {
  private static baseUrl = "http://localhost:4000/api/v1";

  static async register(username: string, email: string, password: string) {
    try {
      const data = await axios.post(`${this.baseUrl}/register`, {
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
      const { data } = await axios.post(`${this.baseUrl}/login`, {
        username,
        password,
      });

      if (data.status === 200) {
        return data.token;
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }
}
