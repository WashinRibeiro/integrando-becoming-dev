import axios from "axios";

const api = axios.create({
  baseURL: "https://becomingdevapi.victorhqdev.ninja",
});

export default api;