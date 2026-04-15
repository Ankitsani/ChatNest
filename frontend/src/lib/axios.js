import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-nest-bmhz.vercel.app/api",
  withCredentials: true,
});
