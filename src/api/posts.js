import axios from "./index";

const postId = "64df3a04f2c8b82547811e6c";

export function apiGetPost() {
  return axios().get(`/post/${postId}`);
}

export function apiGetPostLight() {
  return axios().get(`/post/${postId}/light`);
}
