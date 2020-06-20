import axios from "axios";

const instance = axios.create({
  baseURL: "http://elearning0706.cybersoft.edu.vn/api",
});

export default instance;
