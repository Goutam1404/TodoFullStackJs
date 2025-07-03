import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1", // adjust as per your backend URL
  withCredentials: true,
});

export default api;
