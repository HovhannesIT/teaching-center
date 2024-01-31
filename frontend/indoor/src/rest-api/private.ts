import axios from "axios";
import { UserStore } from "../store/user";
import { SeekingLookingOpenI } from "../types/seeking-looking-open-i";
import { UpdateUserI } from "../types/update-user-i";

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

export const updateUserInfo = async (update: UpdateUserI) => {
  try {
    await axios.post("/user/update-info", update);

    return true;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data.message;
    }
  }
};

export const logout = () => {
  axios.delete("/auth/sign-out").then(() => {
    localStorage.removeItem("token");
  });
  UserStore.setInfo(null);
};

export const seekingLookingOpen = async (seeking: SeekingLookingOpenI) =>
  await axios.put("/seeking-looking/open", {
    ...seeking,
    professionId: Number(seeking.professionId),
  });

export const seekingLookingList = async () => 
  await axios.get("/seeking-looking/list/global");