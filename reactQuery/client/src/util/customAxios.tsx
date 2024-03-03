import axios from "axios";
import { Cookies } from "react-cookie";

const server = import.meta.env.VITE_SERVER_URL;

export const customAxios = axios.create({
  baseURL: server,
});

customAxios.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const authToken = cookies.get("authToken");

    if (authToken) {
      config.headers["Authorization"] = `Token ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);
