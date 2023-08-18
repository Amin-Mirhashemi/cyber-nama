import axios from "./index";

export function apiLogin(data) {
  return axios().post("/auth/login", data);
}

export function apiSignup(data) {
  return axios().post("/user", data);
}

export function apiGetUser() {
  return axios().get("/user");
}

export function apiEditUser(data) {
  return axios().patch("/user", data);
}
