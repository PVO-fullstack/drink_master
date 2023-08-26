import axios from "axios";

const instance = axios.create({
  baseURL: "https://drink-master-backend-bcvr.onrender.com/api",
});

export default instance;
