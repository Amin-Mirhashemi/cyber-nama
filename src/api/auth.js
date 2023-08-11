import axios from "./index";

export function apiLogin(data) {
  return axios.post("/auth/login", data);
}

export function apiSignup(data) {
  return axios.post("/user", data);
}
