import axios from "axios";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVERLINK}`,
  withCredentials: true,
});

export default axiosSecure;
