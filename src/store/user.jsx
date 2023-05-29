import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { BASE_API_URL } from "../helpers/api";
import authStore from "./coach";

function createUserStore() {
  let store = {
    user: null,
    setUser(payload) {
      runInAction(() => {
        store.user = payload;
      });
    },
    async fetchUser() {
      try {
        if (authStore?.token) {
          const response = await axios.get(`${BASE_API_URL}/api/coaches/me`, {
            headers: {
              Authorization: `Bearer ${authStore?.token}`,
            },
          });
          runInAction(() => {
            store.user = response?.data;
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },
  };

  makeAutoObservable(store);
  return store;
}

const userStore = createUserStore();
export default userStore;
