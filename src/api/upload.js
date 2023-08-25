import axios from "./index";

export function apiUpload(data) {
  return axios({ "Content-Type": "multipart/form-data" }).post("/upload", data);
}
