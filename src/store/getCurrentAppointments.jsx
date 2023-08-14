import { autorun, makeAutoObservable, reaction, runInAction } from "mobx";
import { getCurrentAppointments } from "../api";

function createCurrentAppointmentsStore() {
  let store = {
    data: [],
    id: null,
    usersLoading: false,

    setId(id) {
      runInAction(() => {
        store.id = id;
      });
    },

    async fetchCurrentAppointments() {
      try {
        if (store.id) {
          runInAction(() => {
            store.usersLoading = true;
          });

          const response = await getCurrentAppointments(store.id);
          console.log("sdfasdf", response);
          runInAction(() => {
            store.data = response?.content;
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
    if (store.id) store.fetchCurrentAppointments();
  });
  makeAutoObservable(store);
  return store;
}

const currentAppointments = createCurrentAppointmentsStore();

export default currentAppointments;
