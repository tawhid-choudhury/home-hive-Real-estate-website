import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVERLINK}`,
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      signOut(auth).then(
        Swal.fire({
          title: "Warning",
          text: "You have been logged out",
          icon: "warning",
        })
      );
    }
  }
);

export default axiosSecure;
