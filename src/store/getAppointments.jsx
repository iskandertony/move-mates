import { autorun, makeAutoObservable, reaction, runInAction } from "mobx";
import authStore from "./auth";
import moment from "moment/moment";
import { getAppointments, getClientsList } from "../api";

function createAppointmentsStore() {
  const today = moment();
  let store = {
    appointments: [],
    usersLoading: false,

    async fetchAppointments() {
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

          const response = await getAppointments(filter);
          runInAction(() => {
            store.appointments = response?.content;
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
    if (authStore?.token) store.fetchAppointments();
  });

  makeAutoObservable(store);
  return store;
}

const listAppointments = createAppointmentsStore();

export default listAppointments;
