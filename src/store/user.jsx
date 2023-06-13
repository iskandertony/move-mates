import { makeAutoObservable, reaction, runInAction } from "mobx";
import axios from "axios";
import { BASE_API_URL } from "../helpers/api";
import authStore from "./auth";

function createUserStore() {
  let store = {
    user: null,
    role: null,

    setRole(role) {
      runInAction(() => {
        store.role = role;
        localStorage.setItem("role", role);
      });
    },

    async fetchUser() {
      try {
        if (authStore?.token) {
          let lowercaseRole = store.role?.toLowerCase();
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
            localStorage.setItem("user", JSON.stringify(response?.data));
          });
        }
      } catch (error) {
        console.log("Failed to fetch user:", error);
      }
    },
    loadFromLocalStorage() {
      const storedUser = localStorage.getItem("user");
      const storedRole = localStorage.getItem("role");

      if (storedUser) {
        store.user = JSON.parse(storedUser);
      }

      if (storedRole) {
        store.role = storedRole;
      }
    },
  };

  reaction(
    () => authStore?.token,
    () => {
      if (authStore?.token) store.fetchUser();
    }
  );

  store.loadFromLocalStorage();
  makeAutoObservable(store);
  return store;
}

const userStore = createUserStore();
export default userStore;
