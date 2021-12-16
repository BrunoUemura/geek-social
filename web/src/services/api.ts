import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

const { "geek.token": token } = parseCookies();

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
