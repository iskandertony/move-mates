import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { BASE_API_URL } from "../helpers/api";

function createAuthStore() {
  let store = {
    token: sessionStorage.getItem("token"),
    setToken(token) {
      runInAction(() => {
        store.token = token;
      });
    },
    async login(params) {
      try {
        const response = await axios.post(`${BASE_API_URL}/auth/login`, params);
        runInAction(() => {
          store.token = response.data?.token;
        });
        return response;
      } catch (error) {
        console.error(error);
        return error.response;;
      }
    },
  };

  makeAutoObservable(store);
  return store;
}

const authStore = createAuthStore();
export default authStore;
