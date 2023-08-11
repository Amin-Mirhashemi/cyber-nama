import axios from "axios";
import Cookies from "js-cookie";

function getToken() {
  const token = Cookies.get("token");
  return token ? `Bearer ${token}` : undefined;
}

// Create a new Axios instance
const instance = axios.create({
  baseURL: "https://negar.iran.liara.run", // Your API base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: getToken(),
  },
});

export default instance;
