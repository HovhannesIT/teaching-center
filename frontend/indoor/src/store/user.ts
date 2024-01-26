import { makeAutoObservable } from "mobx";
import { signIn as signInCall } from "../rest-api/public";

class User {
  isLoaded = false;
  data: { [param: string]: string } | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async signIn(user: { email: string; password: string }) {
    try {
      const { data } = await signInCall(user);
      this.data = data;
      this.isLoaded = true;
      return data;
    } catch (err) {
      throw err;
    }
  }

  setInfo(info: { [param: string]: string } | null) {
    this.data = info;
  }
}

export const UserStore = new User();
