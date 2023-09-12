import { makeAutoObservable, reaction, runInAction } from "mobx";
import authStore from "./auth";
import { getUser } from "../api";

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
          if (lowercaseRole === "client") {
            lowercaseRole += "s";
          }
          const response = await getUser(lowercaseRole);
          runInAction(() => {
            store.user = response;
            localStorage.setItem("user", JSON.stringify(response));
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
