import { makeAutoObservable, reaction, runInAction } from "mobx";
import axios from "axios";
import { BASE_API_URL } from "../helpers/api";
import authStore from "./auth";

function createUserStore() {
  let store = {
    user: null,
    role: null,

    setUser(payload) {
      runInAction(() => {
        //TODO Нужна ли эта функция в дальнешем ?
        store.user = payload;
      });
    },

    setRole(role) {
      runInAction(() => {
        store.role = role;
      });
    },

    async fetchUser() {
      try {
        if (authStore?.token) {
          let lowercaseRole = store.role.toLowerCase();
          if (lowercaseRole === "coach") {
            lowercaseRole += "es";
          }
          const response = await axios.get(
            `${BASE_API_URL}/api/${lowercaseRole}/me`,
            {
              headers: {
                Authorization: `Bearer ${authStore?.token}`,
              },
            }
          );
          runInAction(() => {
            store.user = response?.data;
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },
  };

  reaction(
    () => authStore?.token,
    () => {
      if (authStore?.token) store.fetchUser();
    }
  );

  makeAutoObservable(store);
  return store;
}

const userStore = createUserStore();
export default userStore;
