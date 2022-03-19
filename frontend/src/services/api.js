import axios from "axios";

const api = axios.create({
  baseURL: "https://ubeer-api.herokuapp.com",
});

export default api;
