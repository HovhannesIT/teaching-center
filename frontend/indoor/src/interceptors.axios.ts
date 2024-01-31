import axios from "axios";
import settings from "./settings.json";
import { getUserInfo } from "./rest-api";
import { UserStore } from "./store/user";
export const InitializeAxiosInterceptors = () => {
axios.interceptors.request.use(
    function (config) {
      config.baseURL = settings["rest-api_dev"];

      if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
      ) {
        config.headers["auth"] = localStorage.getItem("token");
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      if (response.request.responseURL.indexOf("/user/info") === -1) {
        getUserInfo().then((data) => {
          if (data) {
            UserStore.setInfo(data);
          }
        });
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};
