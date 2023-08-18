import axios from "axios";
import Cookies from "js-cookie";

function getToken() {
  const token = Cookies.get("token");
  return token ? `Bearer ${token}` : undefined;
}

const createInstance = () => {
  return axios.create({
    baseURL: "https://negar.iran.liara.run",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};

export default createInstance;
