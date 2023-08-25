import axios from "./index";

const postId = "64df3a04f2c8b82547811e6c";

export function apiGetPost() {
  return axios().get(`/post/${postId}`);
}

export function apiGetPostLight() {
  return axios().get(`/post/${postId}/light`);
}

export function apiComment(text) {
  return axios().post("/comment", { postId, text });
}

export function apiLike() {
  return axios().post("/like", { entityId: postId });
}

export function apiUnLike() {
  return axios().post("/unlike", { entityId: postId });
}

export function apiEditPost(data) {
  return axios().patch("/post", data);
}
