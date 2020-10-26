import axios from "axios";

const instance = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
});

export default instance;
