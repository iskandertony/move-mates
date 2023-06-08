import { autorun, makeAutoObservable, reaction, runInAction } from "mobx";
import authStore from "./auth";
import moment from "moment/moment";
import { getClientsList } from "../api";

function createListUsersStore() {
  const today = moment();
  let store = {
    users: null,
    loading: false,
    async fetchListUsers() {
      store.loading = true;
      try {
        if (authStore?.token) {
          const filter = {
            from: moment(today).toISOString(),
            size: 20,
            page: 0,
          };
          const response = await getClientsList(filter);
          console.log("response", response);
          runInAction(() => {
            store.users = response?.content;
            store.loading = false;
          });
        }
      } catch (error) {
        this.loading = false;
        console.error("Failed to fetch user:", error);
      }
      // console.log("qwerwe", store.users.map((item) => {
      //   console.log("item", item.email)
      // }))
    },
  };

  // reaction(
  //   () => authStore?.token,
  //   () => {
  //     if (authStore?.token) store.fetchListUsers();
  //   }
  // );

  autorun(() => {
    if (authStore?.token) store.fetchListUsers();
  });

  makeAutoObservable(store);
  return store;
}

const listUsers = createListUsersStore();

export default listUsers;
