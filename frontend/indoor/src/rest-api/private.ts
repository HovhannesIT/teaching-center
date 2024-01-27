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

    UserStore.setInfo(data);
    
    return data;
  }

  return false;
};

export const updateUserInfo = async (update: {
  "firstName": string,
  "lastName": string,
  "type": string,
  "professionId": number,
  "phoneNumber": string,
  "primaryCommunicationType": string,
  "birthDate": string
}) => {

  try {
    await axios.post("/user/update-info", update);

    return true;
  } catch(err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data.message;
    }
  }
}

export const logout = () => {
  axios.delete('/auth/sign-out').then(() => {
    localStorage.removeItem('token');
  })
  UserStore.setInfo(null);
}