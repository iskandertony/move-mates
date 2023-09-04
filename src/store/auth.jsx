import { makeAutoObservable, runInAction } from "mobx";

function createAuthStore() {
  let store = {
    token: sessionStorage.getItem("token"),
    setToken(token) {
      sessionStorage.setItem("token", token);
      runInAction(() => {
        store.token = token;
      });
    },
  };

  makeAutoObservable(store);
  return store;
}

const authStore = createAuthStore();
export default authStore;
