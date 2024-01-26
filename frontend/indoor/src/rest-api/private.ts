import axios from "axios";
import { UserStore } from "../store/user";

export const getUserInfo = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const { data } = await axios.get("/user/info", {
      headers: {
        auth: token,
      },
    });
    return data;
  }

  return false;
};

export const logout = () => {
  axios.delete('/auth/sign-out').then(() => {
    localStorage.removeItem('token');
  })
  UserStore.setInfo(null);
}