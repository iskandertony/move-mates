import { autorun, makeAutoObservable, runInAction } from "mobx";
import authStore from "./auth";
import moment from "moment/moment";
import { getClientsList } from "../api";

function createListUsersStore() {
  const today = moment();
  let store = {
    users: [],
    usersLoading: false,

    async fetchListUsers() {
      try {
        if (authStore?.token) {
          runInAction(() => {
            store.usersLoading = true;
          });

          const filter = {
            from: moment(today).toISOString(),
            size: 20,
            page: 0,
          };

          const response = await getClientsList(filter);
          runInAction(() => {
            store.users = response?.content;
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        runInAction(() => {
          store.usersLoading = false;
        });
      }
    },
  };

  autorun(() => {
    if (authStore?.token) store.fetchListUsers();
  });

  makeAutoObservable(store);
  return store;
}

const listUsers = createListUsersStore();

export default listUsers;
