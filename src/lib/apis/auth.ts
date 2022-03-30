import axios, { AxiosInstance } from "axios";

const auth: AxiosInstance = axios.create({
  baseURL: `https://ably-frontend-assignment-server.vercel.app/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
